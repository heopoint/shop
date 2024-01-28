import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { login,logout,onUserStateChange} from '../api/firebase';
import User from './User';
import Button from './ui/Button';


export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    // onUserStateChange(setUser);
    onUserStateChange(user=>{
      console.log(user)
      setUser(user)
    });

    console.log(user)
  }, []);

 

  return (
    <header className=' border-b border-gray-300 p-2'>
      <div className='max-w-1260 mx-auto flex justify-between'>
          <Link to='/' className='flex items-center text-2xl text-brand'>
        <FaShopify />
        <h1>라운지비</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && <Link to='/carts'>Carts</Link>}
        
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
              <RiAdminLine />
          </Link>
        )}

        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
      </div>
    </header>
  );
}
