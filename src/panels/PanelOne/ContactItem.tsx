import React, { useMemo } from 'react'

interface IContactItemProps {
  item: { name: string }
}

const ContactItem: React.FC<IContactItemProps> = ({ item }) => {

  const handleItemClick = useMemo(() => {
    return null
  }, [])

  return (
    <button className='contact-item' onClick={handleItemClick}>
      <span>&#9786; - </span>
      <span>{item.name}</span>
    </button>
  )
}

export default ContactItem