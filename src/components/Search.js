import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  console.log("H: ", hideButtons);

  const search = (e) => {
    e.preventDefault();
    // dispatches an action
    // puts the search term inside the data layer
    // also pushes user to the search page
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onClick={search} variant="outlined">
            This should have been hidden
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
