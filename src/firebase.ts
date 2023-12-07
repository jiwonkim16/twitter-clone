import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQW_2AhNnHiCC8Dqfc_IJhXtYrBVZveYQ",
  authDomain: "twitter-clone-c7902.firebaseapp.com",
  projectId: "twitter-clone-c7902",
  storageBucket: "twitter-clone-c7902.appspot.com",
  messagingSenderId: "231979696442",
  appId: "1:231979696442:web:04788bc50cf47de1da1003",
};

// Initialize Firebase
// 도메인, api key 등 여러 키값이 포함된 config 옵션을 통해 app 을 생성하고
const app = initializeApp(firebaseConfig);

// 그 app에 대한 인증 서비스를 사용하고 싶다!
export const auth = getAuth(app);

// 데이터베이스와 스토리지에 대한 액세스 설정
export const storage = getStorage(app);

export const db = getFirestore(app);
