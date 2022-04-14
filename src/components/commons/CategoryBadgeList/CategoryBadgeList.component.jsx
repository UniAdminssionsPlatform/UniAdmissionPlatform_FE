import React from 'react'
import Badge from '../Badge/Badge.component'

const CategoryBadgeList = ({
  className = 'flex flex-wrap space-x-2',
  itemClass,
  categories
}) => {
  return (
    <div
      className={`nc-CategoryBadgeList ${className}`}
      data-nc-id="CategoryBadgeList"
    >
      {categories.map((item, index) => (
        <Badge
          className={itemClass}
          key={index}
          name={item.name}
          href={item.href}
          color={item.color}
        />
      ))}
    </div>
  )
}

export default CategoryBadgeList
