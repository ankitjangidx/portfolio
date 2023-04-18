import React from 'react'
import Tabsbar from './Tabsbar'
import { Outlet } from 'react-router-dom'

function Content() {
  return (
    <div className="flex flex-col w-full">
      <Tabsbar />
      <div className='h-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default Content