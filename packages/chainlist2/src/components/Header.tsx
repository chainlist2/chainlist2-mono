import React from 'react';
import Button from "../components/button";
import Button2 from "../components/button2";
import PinIcon from '../components/PinIcon';
import SearchIcon from '../components/SearchIcon';
import UserIcon from '../components/UserIcon';
import '../styles.css';

function Header() {
  return (
    <div className="bg-white shadow flex items-center justify-between p-8" style={{ marginTop: '20px' }}>
      <div className="flex items-center space-x-4">
        <PinIcon className="h-8 w-8 text-red-600" />
        <Button2 className="text-black" variant="ghost">
          Home
        </Button2>
        <Button2 className="text-black" variant="ghost">
          Add Your Network
        </Button2>
        <Button2 className="text-black" variant="ghost">
          Add Your RPC
        </Button2>
      </div>
      <div className="flex items-center space-x-4 flex-grow mx-4">
        <div className="flex items-center flex-grow bg-gray-200 rounded-full px-4 py-2">
          <SearchIcon className="h-5 w-5 text-gray-500" />
          <input
            className="bg-transparent bg-gray-200 flex-grow px-2 py-1 outline-none"
            placeholder="Search Networks"
            type="search"
          />
        </div>
        <Button className="bg-red-500 text-white px-4 py-2 rounded-full" variant="default">
          Connect Wallet
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <UserIcon className="h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
}

export default Header;
