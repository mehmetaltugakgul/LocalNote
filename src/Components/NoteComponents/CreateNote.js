import LinearProgress from "@mui/material/LinearProgress"
function CreateNote({ textHandler, saveHandler, inputText }) {
  //character limit
  const charLimit = 250
  const charLeft = charLimit - inputText.length
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type your note..."
        onChange={textHandler}
        maxLength="250"
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} character left</span>
        
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
        
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  )
}

export default CreateNote
