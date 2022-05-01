import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon
} from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div>
        <div>
            <button className="flex items-center space-x-2 hover:text-white">
                <HomeIcon className="h-5 w-5"></HomeIcon>
                <p>Home</p>
            </button>    
            <button className="flex items-center space-x-2 hover:text-white">
                <SearchIcon className="h-5 w-5"></SearchIcon>
                <p>Search</p>
            </button> 
            <button className="flex items-center space-x-2 hover:text-white">
                <LibraryIcon className="h-5 w-5"></LibraryIcon>
                <p>Your library</p>
            </button> 
            <button className="flex items-center space-x-2 hover:text-white">
                <PlusCircleIcon className="h-5 w-5"></PlusCircleIcon>
                <p>Home</p>
            </button> 
        </div>
    </div>
  )
}

export default Sidebar