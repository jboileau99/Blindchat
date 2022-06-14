import { Routes, Route } from 'react-router-dom'
import './App.css';
import SignIn from "./components/routes/sign-in/sign-in";
import Navigation from "./components/routes/navigation/navigation";
import Home from "./components/routes/home/home"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<SignIn/>}/>
        {/*<Route path='friends' element={<FriendsList/>}/>*/}
        {/*<Route path='friends/friend' element={<Chat/>}/>*/}
        <Route path='home' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
