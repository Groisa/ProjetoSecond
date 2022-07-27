import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from './firebase'


export const logoutUser = async () => {
    try {
        await signOut(auth)
    }catch {
        toast.error('Erro ao ser deslogado. Tente novamente.')
    }
}