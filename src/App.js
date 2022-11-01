import "./Components/css/App.css"
import Notes from "./Components/NoteComponents/Notes"
import Header from "./Components/NoteComponents/Header"
import Footer from "./Components/NoteComponents/Footer"
import React, { useCallback, useState, useEffect } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import fullscreenpng from "./Components/css/fullscreen.png"
function App() {
  const handle = useFullScreenHandle()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <br></br>
          <h2 style={{ marginLeft: "15px" }}>LocalNote</h2>
        </div>
      ) : (
        <div>
          <div className="fullbuton">
            <button
              className="fullbuton"
              style={{
                borderRadius: "50%",
                fontSize: "15px",
                cursor: "pointer",
                position: "absolute",
                top: "0",
                right: "0",
              }}
              onClick={handle.enter}
            >
              <img
                src={fullscreenpng}
                alt="fullscreen"
                style={{ width: "30px", height: "30px", margin: "2px" }}
              />
            </button>
          </div>
          <div className="">
            <FullScreen className="fullbody" handle={handle}>
              <div className="main">
                <Header />
                <Notes />

                <Footer />
              </div>
            </FullScreen>
          </div>
        </div>
      )}
    </div>
  )
}
export default App
