import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Primary  = () => {
  return <button className='btn-primary'>Primary</button>
}
const Secondary   = () => {
  return <button className='btn-secondary'>Secondary</button>
}
const Success   = () => {
  return <button className='btn-success'>Success</button>
}
const Danger   = () => {
  return <button className='btn-danger'>Danger</button>
}
const Warning   = () => {
  return <button className='btn-warning'>Warning</button>
}
const  Info  = () => {
  return <button className='btn-info'>Info</button>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Primary/>
    <Secondary/>
    <Success/>
    <Danger/>
    <Warning/>
    <Info/>
    {/* <App /> */}
  </StrictMode>,
)
