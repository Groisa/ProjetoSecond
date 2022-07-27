import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { auth } from "./services/firebase";
import { ControlHoursViews } from "./Views/ControlHours";
import { HomeView } from "./Views/Home";
import { LoginView } from "./Views/Login";


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const UserCheckLogged = async () => {
      onAuthStateChanged(auth, (user) => {
        if(user) {
          navigate('/')
        } else {
          navigate('/login')
        }
      })
    }
    UserCheckLogged()
  }, [])
  return (
    <Routes>
      <Route path="/" element={<HomeView/>}/>
      <Route path='/login' element={<LoginView/>}/>
      <Route path='/controle-minhas-horas' element={<ControlHoursViews/>}/>
    </Routes>
  );
}

export default App;
