import React from 'react';
import Link from './Link';
import './Header.css';

export default function Header() {
  return (
    <div className='ui secondary pointing menu nav'>
      <h1>Widgets</h1>
      <Link href='/' className='item'>
        Accordion
      </Link>
      <Link href='/list' className='item'>
        Search
      </Link>
      <Link href='/dropdown' className='item'>
        Dropdown
      </Link>
      <Link href='/translate' className='item'>
        Translate
      </Link>
    </div>
  )
}
