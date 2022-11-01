import React from "react"
import Link from "@mui/material/Link"

const Footer = () => {
  let currentYear = new Date().getFullYear()
  return (
    <div
      className="text-center text-white p-2"
      style={{
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        position: "fixed",
        marginBottom: "-5px",
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: "center",
        display: "flex",
        fontSize: "10px",
      }}
    >
      <p>© {currentYear} &nbsp; </p>
      <div>
        <Link
          target="_blank"
          href="https://altug.dev"
          style={{ align: "center", color: "white" }}
        >
          made by AltugAkgul
        </Link>
      </div>
      <p>&nbsp; </p>
      <p>with❤️</p>
    </div>
  )
}

export default Footer
