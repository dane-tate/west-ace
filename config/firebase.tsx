import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBG-nHrLSpc7l6tTCmHIpEBIJDVzM1oE90",
  authDomain: "west-ace.firebaseapp.com",
  projectId: "west-ace",
  storageBucket: "west-ace.appspot.com",
  messagingSenderId: "482871469765",
  appId: "1:482871469765:web:d500668ae872ff174d32ac",
  measurementId: "G-8QR4DEQVNL"
};

const app = initializeApp(firebaseConfig);

export default app;