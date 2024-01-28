import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';
import Button from './ui/Button';


export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    // onUserStateChange(setUser);
    onUserStateChange(user => {
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
        <nav className='flex items-center   font-semibold'>
          {!user && (
            <ul className='hidden lg:flex   items-center gap-8 font-semibold '>
              <li><Link to='/products'>BRAND</Link></li>
              <li><Link to='/products'>Review AI</Link></li>
              <li><Link to='/products'>NEW -10%</Link></li>
              <li><Link to='/products'>BEST</Link></li>
              <li><Link to='/products'>APPAREL</Link></li>
              <li><Link to='/products'>BAG/SHOES</Link></li>
              <li  className='mr-8'><Link to='/products'>BEAUTY</Link></li>
              <li className='font-medium  text-cyan-700'><Link to='/products'>OUTLET 기획전</Link></li>
              <li  className='font-medium  text-cyan-700'><Link to='/products'>이벤트</Link></li>
            </ul>
          )}

        </nav>

        <div className='gnb flex items-center gap-8 font-semibold'>

          {user && <Link to='/carts'>Carts</Link>}

          {user && user.isAdmin && (
            <Link to='/products/new' className='text-2xl'>
              <RiAdminLine />
            </Link>
          )}

          {user && <User user={user} />}
          {!user && <Button text={'Login'} onClick={login} />}
          {user && <Button text={'Logout'} onClick={logout} />}

        </div>
        </div>
    </header>
  );
}












