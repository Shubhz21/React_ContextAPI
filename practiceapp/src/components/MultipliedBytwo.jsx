import React, { useContext } from 'react'
import { InputValueContext } from '../context/InputValueContext'

export default function MultipliedBytwo() {
    const {state}=useContext(InputValueContext);
    console.log(state);
  return(<> <p>Multiplied Number: {state.inputValue *3}</p> </>);
}
