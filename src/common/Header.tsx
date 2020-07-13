import React, { useCallback, useState } from 'react';
import SectionHeader from '../panels/PanelOne/SectionHeader';

const Header: React.FC = () => {
  const [searchVal, setSearchVal] = useState('')

  const handleChange = useCallback((e) => {
    setSearchVal(e.target.value)
  }, [])

  const handleSubmit = useCallback((data) => {
    return null
  }, [])

  return (
    <div className='header'>
      <div className='header-left'>
      <SectionHeader text='Inbox' />
        <span>Inbox</span>
      </div>
      <div className='header-right'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={searchVal}
            onChange={handleChange}
            placeholder='search'
          />
          <input type='submit' value='submit' />
        </form>
        <div className='icons'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
    </div>
  )
}

export default Header