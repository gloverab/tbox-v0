import React from 'react'

interface IContactItemProps {
  item: { name: string }
}

const ContactItem: React.FC<IContactItemProps> = ({ item }) => {
  return (
    <div className='contact-item'>
      <span>&#9786; - </span>
      <span>{item.name}</span>
    </div>
  )
}

export default ContactItem