import React from 'react'
import NavComponet from '../nav/Nav.jsx';
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
    <NavComponet/>
    <Outlet />
    </>
  )
}