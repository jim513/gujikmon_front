
import React, { useEffect } from 'react';
import {MarkerData} from './MarkerData';
import '../components/css/MapContainer.css';
<<<<<<< HEAD

import {Filter} from '../view/SelectionView';



=======
import $ from "jquery";
>>>>>>> 16b48d67774e3bddc8d5ad504a3551189c2fd300

const { kakao } = window;

const MapContainer = () => {
<<<<<<< HEAD
=======

>>>>>>> 16b48d67774e3bddc8d5ad504a3551189c2fd300
    useEffect(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.5012860931305, 127.039604663862), //좌표 (y,x)
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

<<<<<<< HEAD
      //GPS 권한얻기
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude, // 위도 y
            lon = position.coords.longitude; // 경도 x

          var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 GPS로 얻어온 좌표로 생성
=======
      // 마커 클러스터러를 생성
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 4, //
      });
      
      //GPS 내위치 마커 이미지
      var imageSrc = 'https://gsmb.mss.go.kr/images/icon/ico-map-pin.png',  //추후 수정  https://gsmb.mss.go.kr/images/icon/ico-map-pin.png
        imageSize = new kakao.maps.Size(30, 29), 
        imageOption = { offset: new kakao.maps.Point(27, 69) };

      var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );
       
        //기업 마커 생성
        var markers = [];
        MarkerData.forEach ((el) => {
            const marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(el.lat, el.lng),
            });

            var customOverlay = new kakao.maps.CustomOverlay({
                position: new kakao.maps.LatLng(el.lat, el.lng),
                content : el.coNm,
                xAnchor: 0.6,
                yAnchor: 3
                
            }); 
            customOverlay.setMap(map,marker); 
            markers.push(marker);
            clusterer.addMarkers(markers);
          });

      //GPS 권한
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude, // 위도 y
              lon = position.coords.longitude; // 경도 x

          var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

>>>>>>> 16b48d67774e3bddc8d5ad504a3551189c2fd300
          displayMarkerMyHome(locPosition);
        });
      } else {
      }

<<<<<<< HEAD
      //GPS 내위치 마커 이미지
      var imageSrcGPS = "https://gsmb.mss.go.kr/images/icon/ico-map-pin.png",
        imageSizeGPS = new kakao.maps.Size(30, 29),
        imageOptionGPS = { offset: new kakao.maps.Point(27, 69) };

      var markerImageGPS = new kakao.maps.MarkerImage(
        imageSrcGPS,
        imageSizeGPS,
        imageOptionGPS
      );
    
      //GPS 내 위치 마커 생성
      function displayMarkerMyHome(locPosition) {
        var marker = new kakao.maps.Marker({
          map: map,
          image: markerImageGPS,
          position: locPosition
        });

        // 지도 중심좌표를 접속위치로 변경
        map.setCenter(locPosition);
        marker.setMap(map);
      }
      
      // 클러스터러 생성
      var clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true, 
        minLevel: 4,
        styles:[
          {
          color : 'white', width : '50px', 
          height : '50px', textAlign: 'center',
          lineHeight: '50px',
          background : 'url("https://gsmb.mss.go.kr/images/icon/ico-map-cluster.png") ',
        }

        ]
      });

      //기업 마커 생성
      var markers = [];
      MarkerData.forEach((el) => {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(el.lat, el.lng),
          // images : markerImageCompany,
          // MarkerImage : markerImage,
        });

        const customOverlay = new kakao.maps.CustomOverlay({
          position: new kakao.maps.LatLng(el.lat, el.lng),
          content: el.coNm,
          xAnchor: 0.6,
          yAnchor: 3,
        });

        // const coNm = new kakao.maps.CustomOverlay({

        // })

        //지도 이벤트
        kakao.maps.event.addListener(map, "zoom_changed", function () {
          var mapLevel = map.getLevel();
          if (mapLevel >= 4) {
            customOverlay.setMap(null);
          } else {
            customOverlay.setMap(map, marker);
          }
        });

        //마커 이벤트
        customOverlay.setMap(map, marker);
        markers.push(marker);
        clusterer.addMarkers(markers);
      });

      


      
     
    }, []);

    return (
      <React.Fragment>
                 
              <div id='map' style={{width: '100%',height: '70vh', zIndex:1}}>
              <Filter></Filter>
              </div>
      </React.Fragment>
=======
      //GPS 내 위치 마커
      function displayMarkerMyHome(locPosition, message) {
        var marker = new kakao.maps.Marker({
          map: map,
          image: markerImage,
          position: locPosition
        });
        
        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
        marker.setMap(map);
        
      }
      //삭제↓
      var content =
        '<div class="wrap">' +
        '    <div class="info">' +
        '        <div class="title">' +
        "            카카오 스페이스닷원" +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        "        </div>" +
        '        <div class="body">' +
        '            <div class="desc">' +
        "				<div>기업명1</div>" +
        '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">채용중</a></div>' +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</div>";

      // 커스텀 오버레이가 표시될 위치입니다
      var position = new kakao.maps.LatLng(37.49887, 127.026581);

      // 커스텀 오버레이를 생성합니다
      var customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        xAnchor: 0.3,
        yAnchor: 0.91,
      });

      // 커스텀 오버레이를 지도에 표시합니다
      customOverlay.setMap(map);
      //↑삭제
      
    }, []);

    return (
        <div id='map' style={{width: '100%',height: '40vw'}}></div>
        
>>>>>>> 16b48d67774e3bddc8d5ad504a3551189c2fd300
    );
}

export default MapContainer; 

