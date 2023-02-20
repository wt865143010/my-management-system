import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import './BasicLayout.css'

function BasicLayout() {
  return (
    <div className='basic_layout'>
      <div className='nav'>nav</div>
      <div className='body_content'>
        <div className='left_menu'>
            <div>
                <Link to='/home'>Home</Link>
            </div>
            <div>
                <Link to='/user'>User</Link>
            </div>
        </div>
        <div className='right_content'>
            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default BasicLayout;
