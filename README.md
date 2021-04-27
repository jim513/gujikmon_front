### 구직몬
구직몬은 카카오 맵 API를 활용하여 워크넷 인증을 받은 강기업들을 찾을 수 있는 프로젝트입니다.
기업 필터링 및 검색 기능을 통하여 매일 갱신되는 채용정보를 받을 수 있습니다.
MSA 구성으로 다른 서비스는 다른 저장소에 분할되어 있습니다.
이 저장소는 배포용으로 다른 서비스가 정상적으로 실행될 경우 동작합니다.

1. SanhaJung / gujikmon_DB_server
2. SanhaJung / gujikmon_certificate_server
3. SanhaJung / gujikmon_api

### 실행과정

1. `yarn install` : 실행에 필요한 패키지 다운로드
2. `yarn start` : react 앱 시작

### 실행결과

#### 1. 메인화면
![화면 캡처 2021-04-27 133628](https://user-images.githubusercontent.com/38041504/116208362-d0278900-a77b-11eb-8d38-292e03fb0e52.jpg)

#### 2. 기업목록
![화면 캡처 2021-04-27 133649](https://user-images.githubusercontent.com/38041504/116208479-efbeb180-a77b-11eb-9a02-ec4342450226.jpg)

#### 3. 로그인
![화면 캡처 2021-04-27 133718](https://user-images.githubusercontent.com/38041504/116208558-01a05480-a77c-11eb-8365-4fcf1ec1f1ea.jpg)

#### 4. 필터창
![화면 캡처 2021-04-27 133805](https://user-images.githubusercontent.com/38041504/116208597-0bc25300-a77c-11eb-8be8-ebc7e4a0357c.jpg)

#### 5. 검색
![화면 캡처 2021-04-27 133950](https://user-images.githubusercontent.com/38041504/116208706-25639a80-a77c-11eb-8d3c-4f1e9ec20d6e.jpg)

#### 6. 관심기업
![화면 캡처 2021-04-27 133935](https://user-images.githubusercontent.com/38041504/116208765-344a4d00-a77c-11eb-9750-8e6c4e4854b4.jpg)
