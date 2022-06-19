# OpenSea 클론코딩

## 팀명

-   씨냅스(**_Seanapse)_**

## 프로젝트 목표

-   OpenSea의 Front-end, Back-end 아키텍처 이해
-   OpenSea API 동작원리 이해, API 레퍼런스 참조
-   OPenSea 구현에 필요 요소 이해 및 구현

## 프로젝트 기간

-   2022년 6월 13일 ~ 2022년 6월 17일 ( 5일 )
    -   기획 - 1일 / 개발 및 배포 - 3일 / 회고 - 1일\\

## 프로젝트에서의 역할

-   팀장 역할 수행
-   NFT 생성 페이지 구현
-   hardhat을 통한 ERC-721 컨트랙트 배포
-   IPFS API 사용하여 파일 업로드
-   프로젝트 배포

## 구현 기능

### 기본 기능

-   [x]  사용자는 메타마스크 지갑을 연동하여 로그인할 수 있다
-   [x]  token uri에 들어갈 내용을 프론트에서 입력

### 주요 기능

-   [x]  사용자는 판매되는 nft의 정보 목록을 조회할 수 있다
-   [x]  사용자는 자신의 거래 내역을 조회할 수 있다
-   [x]  사용자는 nft를 생성 및 저장할 수 있다
-   [x]  사용자는 판매할 품목을 나열할 수 있다

### 추가 기능

-   [ ]  사용자는 nft를 판매할 수 있다
-   [ ]  사용자는 nft를 구매할 수 있다
-   [ ]  플랫폼은 파일코인으로 데이터를 저장한다
-   [ ]  사용자는 고정된 가격 혹은 경매로 nft를 구매할 수 있다
-   [ ]  사용자는 카테고리로 nft를 조회할 수 있다
-   [ ]  사용자는 경매 또는 고정 가격에 대한 입찰가를 선택할 수 있다

## 시나리오

### Home 로그인 접속

1.  사용자가 지갑 버튼을 클릭하게 되면 확장 프로그램의 MetaMaks 지갑을 표시한다.
2.  MetaMask 지갑에 로그인하면 사이트에 로그인된다.

### NFT 조회

1.  클라이언트는 서버에 NFT 정보를 요청한다.
2.  서버는 DB에 저장된 NFT 정보들을 응답한다.
3.  클라이언트는 서버 DB로부터 응답받은 NFT 정보들을 통해 Home 페이지를 보여준다.
4.  사용자는 웹 클라이언트에서 메타마스크 지갑을 연결한다.

### NFT 추가

1.  사용자는 웹 클라이언트에서 Create 버튼을 클릭한다.
2.  클라이언트는 사용자에게 NFT Creation From을 제공한다.
3.  사용자는 NFT 정보(판매 상태)와 이미지를 업로드하여 Submit 버튼을 클릭한다.
4.  클라이언트는 metadata.json 파일에 해당하는 URL과 발행자 주소를 인자로 넣어 NF BN(Blackchain Network)에 보낸다.

## 기술 스택

-   Front-end
    -   Languege - JavaScript
    -   core - React.js
    -   library - ethers, form-data
    -   style - Styled-componets
-   Blockchain
    -   Languege - Solidity
    -   Core - Ethereum
    -   Network - Ropsten Testnet
    -   library - ERC-721

## 결과물

### Home 페이지

-   NFT 리스트 조회

![##_Image|kage@b5chIE/btrE0q6wGk7/YImFeiRalwBeRrokwu4TgK/img.png|CDM|1.3|{"originWidth":1978,"originHeight":824,"style":"alignCenter"}_##](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5chIE%2FbtrE0q6wGk7%2FYImFeiRalwBeRrokwu4TgK%2Fimg.png)

-   MetaMask 지갑 연결

![##_Image|kage@cKWKAN/btrE1s4rA8t/NwESNRVRuSW8iO6hfme9tK/img.png|CDM|1.3|{"originWidth":1916,"originHeight":1006,"style":"alignCenter"}_##](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcKWKAN%2FbtrE1s4rA8t%2FNwESNRVRuSW8iO6hfme9tK%2Fimg.png)

### NFT Create 페이지

-   이미지 업로드
-   정보 입력
-   업로드한 이미지를 IPFS에 저장 후 이미지 IPFS URI를 입력한 정보에 추가하여 metadata.json 파일을 IPFS에 업로드

![##_Image|kage@9q2f7/btrEX8y1Jfq/effoFmeinTkkpcdMAK4kxK/img.png|CDM|1.3|{"originWidth":1990,"originHeight":1056,"style":"alignCenter"}_##](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F9q2f7%2FbtrEX8y1Jfq%2FeffoFmeinTkkpcdMAK4kxK%2Fimg.png)

### 상세 페이지

-   tokenId를 통해 NFT 정보 불러오기

![##_Image|kage@edJvB5/btrEXWlimfF/jkhZepZf8WjIaty6ZpkBNK/img.png|CDM|1.3|{"originWidth":1974,"originHeight":926,"style":"alignCenter"}_##](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FedJvB5%2FbtrEXWlimfF%2FjkhZepZf8WjIaty6ZpkBNK%2Fimg.png)

### 마이페이지

-   소유한 NFT 목록 조회

![##_Image|kage@FHWLR/btrE3g29WZF/oGzd0O1rfQEGUUD2iajNV0/img.png|CDM|1.3|{"originWidth":1976,"originHeight":882,"style":"alignCenter"}_##](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FFHWLR%2FbtrE3g29WZF%2FoGzd0O1rfQEGUUD2iajNV0%2Fimg.png)
