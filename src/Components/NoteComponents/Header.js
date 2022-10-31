function Header() {
  return (
    <div className="header">
      <h1 className="notes__title">
        <span style={{ fontWeight: "bold" }}>LocalNote &nbsp; </span> 
      </h1><br></br>
      <p className="altug" style={{ fontWeight:"semi-bold", fontSize: "17px", paddingTop: "2px", color:"white", justifyContent:"center", verticalAlign:"center"}}>
       Your Local Notepad
      </p>
      <hr className="hr" style={{ width: "50%", color: "white" }} />
          </div>
  )
}

export default Header
