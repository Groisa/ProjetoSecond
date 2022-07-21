import { Routes, Route } from "react-router-dom";
import { HomeView } from "./Views/Home";
import { LoginView } from "./Views/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView/>}/>
      <Route path='/login' element={<LoginView/>}/>
    </Routes>
  );
}

export default App;
