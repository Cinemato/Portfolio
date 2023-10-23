// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, CollectionReference } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAilu15CJbJ2AXwnm0BiSLrYkfRJ1o6sJQ",
  authDomain: "portfolio-khaled.firebaseapp.com",
  projectId: "portfolio-khaled",
  storageBucket: "portfolio-khaled.appspot.com",
  messagingSenderId: "492800765591",
  appId: "1:492800765591:web:93b5d3c8c08f68f55703d2",
  measurementId: "G-00101NPWGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const getCollectionData = async <T>(collectionName: string) => {
  let filteredData = [] as T[];
  const collectionRef = collection(db, collectionName) as CollectionReference<T>;
  try {
    const data = await getDocs(collectionRef);
    filteredData = data.docs.map((doc) => (
      {...doc.data(), id: doc.id}
    )) as T[];
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }

  return filteredData;
}