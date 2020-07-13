import React from 'react';

const Header: React.FC = () => {

  return (
    <div className='header'>
      <div className='header-left'>
        <span>Inbox</span>
      </div>
      <div className='header-right'>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  )
}

export default Header