import React, { useState } from 'react'
import Heading from '../Heading/Heading.component'
import CardLarge from '../CardLarge/CardLarge.component'

const SectionLargeSlider = ({
  posts,
  heading = `Các sự kiện tuyển sinh sắp diễn ra`,
  className = ''
}) => {
  const [indexActive, setIndexActive] = useState(0)

  const handleClickNext = () => {
    setIndexActive(state => {
      if (state >= posts.length - 1) {
        return 0
      }
      return state + 1
    })
  }

  const handleClickPrev = () => {
    setIndexActive(state => {
      if (state === 0) {
        return posts.length - 1
      }
      return state - 1
    })
  }

  return (
    <div className={`nc-SectionLargeSlider relative ${className}`}>
      {!!heading && <Heading>{heading}</Heading>}
      {posts.map((item, index) => (
        <CardLarge
          key={index}
          isShowing={indexActive === index}
          onClickNext={handleClickNext}
          onClickPrev={handleClickPrev}
          post={item}
        />
      ))}
    </div>
  )
}

export default SectionLargeSlider
