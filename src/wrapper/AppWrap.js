import React from 'react'

const AppWrap = (Component, idName) => function HOC() {
  return (
    <section className="section" id={idName}>
      <Component/>
    </section>
  )
}

export default AppWrap
