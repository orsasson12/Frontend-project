import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import NavMobile from '../navbar/NavMobile';
const Header = ({mode,setMode}) => {
    const [toggle, setToggle] = useState(false)

  return (
   <>
   <Navbar setToggle={setToggle} toggle={toggle} setMode={setMode} mode={mode} />
      {
        toggle && <NavMobile toggle={toggle} setMode={setMode} mode={mode} />
      }
   </>
  )
}

export default Header