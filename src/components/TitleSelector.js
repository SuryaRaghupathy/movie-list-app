import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button"; // Added import for Button
import { FilmTitleContext } from "./Context";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelect({ movies }) {
  const theme = useTheme();
  const [selectedMovies, setSelectedMovies] = React.useState([]);
  const [selectedTitles, setSelectedTitles] = useContext(FilmTitleContext);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedMovies(value);
    const selectedTitles = value
      .map((movie) => (movie ? movie.title : null))
      .filter(Boolean);

    const copyOfSelectedTitles = [...(selectedTitles || [])];

    // Log selected titles to console
    console.log("Selected Titles:", copyOfSelectedTitles);
    setSelectedTitles(copyOfSelectedTitles);
  };

  const handleClear = () => {
    setSelectedMovies([]);
    setSelectedTitles([]); // Clear selected titles when the button is clicked
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ m: 1, width: 300 }} className="flex">
        <InputLabel id="demo-multiple-movie-label">Select Movies</InputLabel>
        <Select
          labelId="demo-multiple-movie-label"
          id="demo-multiple-movie"
          multiple
          value={selectedMovies}
          onChange={handleChange}
          input={<OutlinedInput label="Select Movies" />}
          MenuProps={MenuProps}
        >
          {movies?.map((movie) => (
            <MenuItem
              key={movie?.title}
              value={movie} // Set the value to the entire movie object
              style={getStyles(movie?.title, selectedMovies, theme)}
            >
              {movie?.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={handleClear}
        style={{ padding: "15px 20px" }}
      >
        Clear
      </Button>
    </div>
  );
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
