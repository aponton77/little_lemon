import React, { useReducer } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Booking from './Booking'

const Main = () => {
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);
  return (
    <main>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm=
            {submitForm}/>}/>
            <Route path='/' element={<Header/>}/>
        </Routes>
    </main>
  )
}

export default Main