import NavBar from "./routes/navbar/NavBar";
import HomeComponent from "./routes/home/HomeComponent";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./routes/signIn/SignUp";
import Signin from "./routes/signIn/Signin";
import './App.scss';
const App = () => {
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<HomeComponent />} />
        <Route path='signUp' element={<SignUpForm />} />
        <Route path='signIn' element={<Signin />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;