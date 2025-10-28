// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhGGO4SvWEHQakhndS7yxvCzKoJA27HwQ",
  authDomain: "primerfirebase-9dba2.firebaseapp.com",
  projectId: "primerfirebase-9dba2",
  storageBucket: "primerfirebase-9dba2.firebasestorage.app",
  messagingSenderId: "775700028809",
  appId: "1:775700028809:web:6a9656d8cdd78e8fe7d558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const google = async () =>{
  const userCredential = await
  signInWithPopup(auth,provider);
  return userCredential;
}



// 🚀 Nueva función para cerrar sesión
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada correctamente.");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};

export { auth };