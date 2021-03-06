import React from 'react'
const scrollUp = e => window.scrollTo(0, 0)

const GoToTop = ({ onClick = scrollUp, ...props }) => (
  <nav {...props} className="GoToTop" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <path d="M512 530L320 338 128 530 0 402 320 82l320 320z" />
    </svg>
  </nav>
)

export default GoToTop
