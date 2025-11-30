import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./index.css";
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
    color: "#fff"   // default white
  });

  const colors = ["#fff", "#ffeb3b", "#ffcc80", "#c5e1a5", "#b39ddb", "#80deea", "#ffcdd2"];

  function expand() {
    setExpanded(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function pickColor(c) {
    setNote(prev => ({ ...prev, color: c }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      color: "#fff"
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">

        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        {/* Color palette (only visible when expanded) */}
        {isExpanded && (
          <div className="color-row">
            {colors.map(c => (
              <div
                key={c}
                className="color-dot"
                style={{ backgroundColor: c }}
                onClick={() => pickColor(c)}
              ></div>
            ))}
          </div>
        )}

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
