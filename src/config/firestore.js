// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'apiKey:import.meta.env.VITE_FIRESTORE_API',
	authDomain: 'chicago-firestore-rb.firebaseapp.com',
	projectId: 'chicago-firestore-rb',
	storageBucket: 'chicago-firestore-rb.firebasestorage.app',
	messagingSenderId: '896440432690',
	appId: '1:896440432690:web:a46fafbe2c52344561a42b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
