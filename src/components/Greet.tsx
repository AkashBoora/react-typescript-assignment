import React from 'react'

export interface GreetType {
  name: string
}

export const Greet= (props:GreetType) =>{
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  )
}

export default Greet;
