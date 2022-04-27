import React from 'react'

const AppWrap = (Component, idName) => function HOC() {
  return (
    <secttion className="section" id={idName}>
      <Component/>
    </secttion>
  )
}

export default AppWrap
