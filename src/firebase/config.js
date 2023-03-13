import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9Ezhpjq85FhCpgXU94HncL9xvMHy3wP0",
  authDomain: "react-3dd72.firebaseapp.com",
  projectId: "react-3dd72",
  storageBucket: "react-3dd72.appspot.com",
  messagingSenderId: "485868821807",
  appId: "1:485868821807:web:7ce730b9c371e944db55da"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
