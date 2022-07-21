import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
export const LoginAuth = async ({ email, password }) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        return user
}