import { Routes, Route } from 'react-router-dom'
import './App.css';
import SignIn from "./components/routes/sign-in/sign-in";
import FriendsList from "./components/friends-list/friends-list";
import Chat from "./components/chat/chat";
import Navigation from "./components/routes/navigation/navigation";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<SignIn/>}/>
        <Route path='friends' element={<FriendsList/>}/>
        <Route path='friends/friend' element={<Chat/>}/>
      </Route>
    </Routes>
  );
}

export default App;
