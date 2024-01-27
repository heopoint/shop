import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { login,logout,onUserStateChange} from '../api/firebase';
import User from './User';


export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
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
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new' className='text-1xl'>
          <RiAdminLine />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
      </div>
    </header>
  );
}
