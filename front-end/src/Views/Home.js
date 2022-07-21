import { useNavigate } from "react-router-dom"

export function HomeView () {
    const navigate = useNavigate()
    const handleNAvigate = () => {
        navigate('/login')
    }
    
    return (
        <button onClick={handleNAvigate}>Login</button>
    )
}