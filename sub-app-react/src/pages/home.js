import React from 'react';

function Home () {
  const sayHi = () => {
    React.$mainOrSubStore.dispatch({ type: 'MODIFY', payload: { sex: 'maleReact', weight: 100 } })
  }

  return (
    <h1 onClick={sayHi}>Home</h1>
  )
}

export default Home
