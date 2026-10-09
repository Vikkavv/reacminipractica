import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import DoctoresEspecialidad from './DoctoresEspecialidad'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomeComponent/>} />
            <Route path='/Doctores' element={<DoctoresEspecialidad/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
