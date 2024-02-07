import React from 'react'

export const Footer = () => {
  let footerStyle={
    // margin:"10px",
    top:"10vh",
    position: "relative",
    width: "100%",
    // border: "2px solid red"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className='text-center py-3'> 
      CopyRights &copy; Mytodoslist.com
      </p>
    </footer>
  )
}

export default Footer
