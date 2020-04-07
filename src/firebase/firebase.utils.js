import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDCL3DpWhlwg2wX1KLs3NLOM0hTmZwaQsk',
	authDomain: 'crwn-db-9e80a.firebaseapp.com',
	databaseURL: 'https://crwn-db-9e80a.firebaseio.com',
	projectId: 'crwn-db-9e80a',
	storageBucket: 'crwn-db-9e80a.appspot.com',
	messagingSenderId: '644126302967',
	appId: '1:644126302967:web:859a95e7c3a5486049e9f2',
	measurementId: 'G-1SPGLE69PZ'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
