import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FilmDetailsContext } from "./Context";
import { useContext } from "react";

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

export default function MultipleSelect() {
  const theme = useTheme();
  const importedMoviesArray = useContext(FilmDetailsContext);
  const [selectedMovies, setSelectedMovies] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedMovies(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
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
          {importedMoviesArray.map((movie) => (
            <MenuItem
              key={movie.title}
              value={movie.title}
              style={getStyles(movie.title, selectedMovies, theme)}
            >
              {movie.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
