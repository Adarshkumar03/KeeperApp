import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expand, setExpand] = useState({
    type: "hidden",
    noOfrows: 1,
    isHidden: false
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function handleClick() {
    console.log("Clicked");
    setExpand({
      type: "none",
      noOfrows: 3,
      isHidden: true
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          type={expand.type}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <div onClick={handleClick}>
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={expand.noOfrows}
          />
        </div>
        <Zoom in={expand.isHidden}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
