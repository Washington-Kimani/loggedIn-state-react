import React,{useContext} from 'react'
import { UserContext } from '../contexts/UserProvider';
import LogOut from "../components/LogOut";

function UserProfile() {
    const {user} = useContext(UserContext);
  return (
    <div className="flex flex-col justify-center items-center text-white">
      Welcome, {user.username}!
      <p>Your email is:&nbsp;{user.email}</p>
      <LogOut />
    </div>
  );
}

export default UserProfile