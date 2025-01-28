"use client"

import React from 'react'
import { useState } from 'react'

const Counter = () => {


    const [counter, setCounter] = useState(0)


  return (
    <div>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default Counter;