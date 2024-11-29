import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router'

function Logout() {
const navigate= useNavigate()
    Cookies.remove("access")
window.location.href="/"
  return (
    <div>
      Logging Out
    </div>
  )
}

export default Logout
