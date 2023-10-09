// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrPcSiJ0fTDV_Xe_xpG2uz5NsqYKlmi9w",
  authDomain: "edu-events-bc1b1.firebaseapp.com",
  projectId: "edu-events-bc1b1",
  storageBucket: "edu-events-bc1b1.appspot.com",
  messagingSenderId: "353547579163",
  appId: "1:353547579163:web:0a10f4950454798d6c2dbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
