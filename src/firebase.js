// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
	apiKey: "AIzaSyBNHoILaUugp_OSD8nHlxtSjE5HeIl6p70",
	authDomain: "todo-app-e4619.firebaseapp.com",
	projectId: "todo-app-e4619",
	storageBucket: "todo-app-e4619.appspot.com",
	messagingSenderId: "989147303646",
	appId: "1:989147303646:web:e54ece384fbbcf5581bc4f",
	measurementId: "G-J5BEGBH0HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const db = getDatabase(app)
export const auth = getAuth(app);
