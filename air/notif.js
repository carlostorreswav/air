import React, { useState } from "react"
import styled from "styled-components"

const NotifMainDiv = styled.div`
  position: fixed;
  width: 90%;
  max-width: 500px;
  top: 2.5%;
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index: 100;
  transform: translateX(${p => (p.start === "true" ? "0px" : "-100%")});
  opacity: ${p => (p.start === "true" ? "1" : "0")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  /* box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4); */
  pointer-events: none;
  border-radius: 4px;
`

const NotifMsg = styled.div`
  border-radius: 4px;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  color: white;
  background-color: ${p => (p.type === "success" ? "#4c723c" : "#e74c3c")};
`

export const NotifContext = React.createContext({})

export const NotifProvider = ({ children }) => {
  const [Notif, setNotif] = useState({
    start: false,
    type: "",
    msg: "",
  })

  const success = msg => {
    const type = "success"
    setNotif({ type, msg, start: true })
    setTimeout(() => {
      setNotif({ type, msg, start: false })
    }, 2000)
  }

  const error = msg => {
    const type = "error"
    setNotif({ type, msg, start: true })
    setTimeout(() => {
      setNotif({ type, msg, start: false })
    }, 2000)
  }

  return (
    <NotifContext.Provider value={{ success, error }}>
      <NotifMainDiv start={Notif.start.toString()}>
        <NotifMsg type={Notif.type}>{Notif.msg}</NotifMsg>
      </NotifMainDiv>
      {children}
    </NotifContext.Provider>
  )
}
