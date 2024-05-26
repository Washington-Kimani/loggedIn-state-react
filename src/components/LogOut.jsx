import React, {useContext} from 'react';
import { UserContext } from '../contexts/UserProvider'

function LogOut() {
  const {loading} = useContext(UserContext);
  const handleLogout = function(){
    localStorage.removeItem('user');
  }
  return (
    <div>
      <button onClick={handleLogout} className='px-2 py-1  bg-red-400 mt-8 rounded-sm text-sm'>LogOut</button>
    </div>
  )
}

export default LogOut