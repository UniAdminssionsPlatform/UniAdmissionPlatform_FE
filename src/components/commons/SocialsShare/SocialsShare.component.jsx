import React from 'react'
const socials = [
  { id: 'Facebook', name: 'Facebook', icon: 'lab la-facebook-f', href: '#' },
  { id: 'Twitter', name: 'Twitter', icon: 'lab la-twitter', href: '#' },
  { id: 'Linkedin', name: 'Linkedin', icon: 'lab la-linkedin-in', href: '#' },
  { id: 'Instagram', name: 'Instagram', icon: 'lab la-instagram', href: '#' }
]

export const SOCIALS_DATA = socials

const SocialsShare = ({
  className = 'grid gap-[6px]',
  itemClass = 'w-7 h-7 text-base hover:bg-neutral-100'
}) => {
  const renderItem = (item, index) => {
    return (
      <a
        key={index}
        href={item.href}
        className={`rounded-full leading-none flex items-center justify-center bg-white text-neutral-6000 ${itemClass}`}
        title={`Share on ${item.name}`}
      >
        <i className={item.icon}></i>
      </a>
    )
  }

  return (
    <div className={`nc-SocialsShare ${className}`} data-nc-id="SocialsShare">
      {socials.map(renderItem)}
    </div>
  )
}

export default SocialsShare
