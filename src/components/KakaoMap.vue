<template>
  <div class="map">
    <div class="row">
      <div class="map-area">
        <div id="map"></div>
        <button id="reset" @click="reset"><i class="fas fa-sync-alt"></i></button>
      </div>
      <div class="map-contents">
        <div class="info">
          <div class="title">{{member.ctpName}}</div>
          <div class="body">
            <div class="desc">
              <ul>
                <li><b>전체회원</b><span>{{member.totalStudCnt}}</span>명</li>
                <li><b>평균 출석률</b><span>{{member.wkAttRt}}</span>%</li>
                <li><b>평균 수행률</b><span>{{member.wkExRt}}</span>%</li>
                <li><b>평균 정답률</b><span>{{member.wkAvgScore}}</span>%</li>
                <li><b>평균 일일학습시간</b><span>{{member.wkAvgLrnSec}}</span>분</li>
              </ul>
              <a href="#">회원 상세보기</a>
            </div>
          </div>
        </div>
        <div class="btn-group-avg">
          <button 
            v-for="(menu, index) in avgMenu" 
            :key="index" 
            :class="[menu.type, {active:isAvgMenuActive(menu.value)}]"  
            @click="avgFilter(menu.value)">
            {{menu.name}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import colorType from '@/assets/js/colorType';
import positionInfo from '@/assets/js/positionInfo';
import axios from 'axios';
import $ from "jquery";
const kakao=window.kakao;
const url="https://hanna7582.github.io/social-contribution";

export default {
  data() {
    return {
      avgMenu:[{
        type:'type1',
        value:'wkAttRt',
        name:'평균 출석률'
      },
      {
        type:'type2',
        value:'wkExRt',
        name:'평균 수행률'
      },
      {
        type:'type3',
        value:'wkAvgScore',
        name:'평균 정답률'
      },{
        type:'type4',
        value:'wkAvgLrnSec',
        name:'평균 일일학습시간'
      }],
      activeAvgMenu:'wkAttRt',
      loginInfo: {},
      membersInfo: {},
      member:{
        ctpName: '지역이름',
        wkAttRt: 50,
        wkExRt: 43,
        wkAvgScore: 80,
        wkAvgLrnSec: 111,
        totalStudCnt: 6206
      },
      initAvgType: 'wkAttRt',
      initColor: colorType['wkAttRt'],
      changeAvgType: 'wkAttRt',
      changeColor: colorType['wkAttRt'],      
    }
  },
  mounted () {
    this.initInfo();
  },
  methods : {     
    // 1. 최초실행 
    initInfo(){
      axios.get(url+'/assets/js/loginInfo.json')
      .then((login) => {
        this.loginInfo = login.data;
        axios.get(url+'/assets/js/members/level' + login.data.level + '_members.json')
        .then((members) => {
          var member = members.data[0];
          if (this.loginInfo.grade !== 0) {
            member = members.data.filter(function(area) {
              return area.ctpName == login.data.ctpName
            })[0];
          }
          this.member=member;
        })
        axios.get(url+'/assets/js/members/level' + (login.data.grade + 1) + '_members.json')
        .then((members) => {
          this.membersInfo = members.data;
          // 기본 geojson 정보
          this.geoJsonInfo(login.data);
        })
      })
    },
    // 2. geojson 정보
    geoJsonInfo(ctpInfo){
      $('#map').empty();
      var areas = [];
      axios.get(url+'/assets/js/geojson/' + ctpInfo.ctpCode + '.json')
      .then((geojson) => {
        // console.log('지도영역 원본데이터', geojson);
        geojson.data.features.forEach( region => {
          var area = {
            name: region.properties.name,
            code: region.properties.code,
            path: []
          }
          var coordinates = region.geometry.coordinates;
          var polygonType = region.geometry.type;
          if (polygonType == 'Polygon') {
            coordinates.forEach( coordinates => {
              var coordinateArray = [];
              coordinates.forEach( coordinate => {            
                coordinateArray.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]))
              });
              area.path.push(coordinateArray);
            });
          } else {
            coordinates.forEach( arr => {
              arr.forEach( coordinates => {
                var coordinateArray = [];
                coordinates.forEach( coordinate => {
                  coordinateArray.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]))
                });
                area.path.push(coordinateArray);
              });
            });
          }
          areas.push(area)
        });
        // console.log('지도영역 추출데이터:', areas);
      }).then(( ) => {
        this.kakaoMapLoad(areas, ctpInfo);
      })
    },
    // 3. 지도 로드 
    kakaoMapLoad(areas, ctpInfo){      
      var vm=this;
      var markers;
      var position = positionInfo[ctpInfo.ctpName.split(' ')[0]];
      var mapContainer = document.getElementById('map'),
        mapOption = {
          center: new kakao.maps.LatLng(position.centroids[0], position.centroids[1]),
          level: position.zoom
        };

      var map = new kakao.maps.Map(mapContainer, mapOption);
      map.setCopyrightPosition(kakao.maps.CopyrightPosition.BOTTOMRIGHT, true);

      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

      kakao.maps.event.addListener(map, 'zoom_changed', function() {
        var zoomLevel = map.getLevel();
        if (zoomLevel < 13) {
          clusterer.addMarkers(markers);
        } else {
          clusterer.clear();
        }
      });

      // 지도에 영역데이터를 폴리곤으로 표시     
      for (var i = 0; i < areas.length; i++) {
        var findArea = false;
        for (var j = 0; j < this.membersInfo.length; j++) {
          if (areas[i].name == this.membersInfo[j].ctpName.split(' ')[ctpInfo.grade]) {
            findArea = true;
            displayArea(areas[i], this.membersInfo[j]);
            break;
          }
        }
        if (!findArea) {
          displayArea(areas[i], null);
        }
      }

      // area:영역, member:회원정보
      function displayArea(area, member) {
        var polygon = new kakao.maps.Polygon({
          map: map,
          path: area.path,
          strokeWeight: 2,
          strokeColor: '#fff',
          strokeOpacity: 1,
          fillColor: '#ccc',
          fillOpacity: 0.8,
        });

        // 점수에 따른 색상 표시
        var colorName = '';
        if (member) {          
          if (member[vm.changeAvgType] >= 80) {
            colorName = vm.changeColor[0];
          } else if (member[vm.changeAvgType] >= 60) {
            colorName = vm.changeColor[1];
          } else if (member[vm.changeAvgType] >= 40) {
            colorName = vm.changeColor[2];
          } else if (member[vm.changeAvgType] >= 20) {
            colorName = vm.changeColor[3];
          } else {
            colorName = vm.changeColor[4];
          }
          polygon.setOptions({
            fillColor: colorName,
          });
        }

        var ctpNameArr = ctpInfo.ctpName.split(' ');
        if (ctpNameArr.length == 2) {
          var targetName = ctpNameArr[ctpNameArr.length - 1];
          if (area.name == targetName) {
            $(polygon.Bc[0]).addClass('twinkle');
            vm.member=member;
          }
        }
        kakao.maps.event.addListener(polygon, 'click', function() {
          if (member) {
            $('#map *').removeClass('twinkle');
            $(polygon.Bc[0]).addClass('twinkle');
            vm.member=member;
            // 전국일 때
            if (ctpInfo.grade == 0) {
              var changeCtpInfo = {
                grade: 1,
                ctpCode: area.code,
                ctpName: area.name
              }
              axios.get(url+'/assets/js/members/level2_members.json')
                .then(function(members) {
                  vm.membersInfo = members.data;
                  vm.geoJsonInfo(changeCtpInfo);
                })
            }
          }
        });
      }

      //클러스터
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 12, // 클러스터 할 최소 지도 레벨
        texts: getTexts,
        styles: [{
          width: '40px',
          height: '40px',
          background: 'rgba(0, 0, 0, .8)',
          borderRadius: '50%',
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          lineHeight: '41px'
        }]
      });

      function getTexts() {
        return 'click';
      }
      $.get(url+'/assets/js/members/level3_members.json', function(members) {
        if (ctpInfo.grade == 1) {
          members = members.filter(function(area) {
            return area.ctpName.split(' ')[0] == ctpInfo.ctpName.split(' ')[0];
          })
        }

        markers = $(members).map(function(i, position) {
          var spritePosigionX, spritePosigionY = 0;

          if (position[vm.changeAvgType] >= 80) {
            spritePosigionX = 0;
          } else if (position[vm.changeAvgType] >= 60) {
            spritePosigionX = 30;
          } else if (position[vm.changeAvgType] >= 40) {
            spritePosigionX = 60;
          } else if (position[vm.changeAvgType] >= 20) {
            spritePosigionX = 90;
          } else {
            spritePosigionX = 120;
          }
          if (vm.changeAvgType == 'wkAttRt') {
            spritePosigionY = 0;
          } else if (vm.changeAvgType == 'wkExRt') {
            spritePosigionY = 30;
          } else if (vm.changeAvgType == 'wkAvgScore') {
            spritePosigionY = 60;
          } else {
            spritePosigionY = 90;
          }

          var ctpName = members[i].ctpName.split(' ');
          var targetName = ctpName[ctpName.length - 1];
          var imageSrc = url+'/assets/img/level3.png', // 마커이미지   
            imageSize = new kakao.maps.Size(30, 30), // 마커이미지의 크기
            imageOption = {
              spriteOrigin: new kakao.maps.Point(spritePosigionX, spritePosigionY),
              spriteSize: new kakao.maps.Size(150, 120),
              alt: targetName
            };

          return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(position.lat, position.lng),
            clickable: true,
            image: new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
          });
        });

        var zoomLevel = map.getLevel();
        if (zoomLevel < 13) {
          clusterer.addMarkers(markers);
        } else {
          clusterer.clear();
        }

        // level3 기본 정보 표시
        for (var i = 0; i < markers.length; i++) {
          var member = members[i];
          kakao.maps.event.addListener(markers[i], 'click', level3Info(member));
          if (vm.loginInfo.ctpName == member.ctpName) {          
            vm.twinkle(member);
            vm.member=member;            
          }
        }

        function level3Info(member) {
          return function() {
            vm.twinkle(member);
            vm.member=member;   
          }
        }

        // 클러스터 클릭시 깜빡임 표시
        kakao.maps.event.addListener(clusterer, 'clusterclick', function() {
          for (var i = 0; i < markers.length; i++) {
            var member = members[i];
            if (vm.loginInfo.ctpName == member.ctpName) {
              vm.twinkle(member);
            }
          }
        });
      });
    },
    // 4. 깜빡임
    twinkle(member){
      var ctpName = member.ctpName.split(' ');
      var targetName = ctpName[ctpName.length - 1];
      $('#map *').removeClass('twinkle');
      $('#map img').parent().css('zIndex', 0);
      $('img[alt="' + targetName + '"]').parent().css('zIndex', 100);
      $('img[alt="' + targetName + '"]').addClass('twinkle');
    },
    reset(){
      this.changeAvgType=this.initAvgType;
      this.changeColor=colorType[this.initAvgType];
      this.initInfo();
    },
    avgFilter(value){
      this.activeAvgMenu=value;
      this.changeAvgType=value;
      this.changeColor=colorType[value];
      this.initInfo();
    },
    isAvgMenuActive(value){
      return value==this.activeAvgMenu;
    }   

  }

}
</script>

<style>

</style>