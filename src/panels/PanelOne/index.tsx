import React, { useMemo } from 'react'
import ContactItem from './ContactItem'
import { defaultItems } from '../../constants'

const PanelOne: React.FC = () => {
  const items1 = useMemo(() => {
    return defaultItems.map(item => {
      return <ContactItem item={item} />
    })
  }, [])
  return (
    <div className='panel panel-one'>
      <span>Panel One</span>
      {items1}
    </div>
  )
}

export default PanelOne