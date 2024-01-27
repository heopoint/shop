import React from 'react';
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <FaShopify />
        <h1>라운지비</h1>
      </Link>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>
          <RiAdminLine />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
