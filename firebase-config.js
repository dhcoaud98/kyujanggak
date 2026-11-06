// Firebase 콘솔 → 프로젝트 설정 → 내 앱(웹 </>) → 'SDK 설정 및 구성'에 나오는 값을 그대로 붙여 넣으세요.
// 이 값은 공개되어도 괜찮은 '주소' 정보입니다. 데이터는 firestore.rules가 지켜 줍니다.
export const firebaseConfig = {
  apiKey: "여기에-apiKey-붙여넣기",
  authDomain: "프로젝트ID.firebaseapp.com",
  projectId: "프로젝트ID",
  storageBucket: "프로젝트ID.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};
