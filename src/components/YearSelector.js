import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FilmYearContext } from "./Context";
import Button from "@mui/material/Button";

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
  const [selectedYear, setSelectedYear] = useContext(FilmYearContext);

  // Filtering logic to remove movies with repeated years
  const uniqueMovies = movies
    ? movies
        .filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.year === movie.year)
        )
        .sort((a, b) => a.year - b.year) // Sort in ascending order based on 'year'
    : [];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectedMovies(value);
    const selectedYear = value
      .map((movie) => (movie ? movie.year : null))
      .filter(Boolean);

    const copyOfSelectedYears = [...(selectedYear || [])];

    console.log("Selected Years:", copyOfSelectedYears);
    setSelectedYear(copyOfSelectedYears);
  };

  const handleClear = () => {
    setSelectedMovies([]);
    setSelectedYear([]); // Clear selected titles when the button is clicked
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl sx={{ m: 1, width: 300 }} className="flex">
        <InputLabel id="demo-multiple-movie-label">Select Year</InputLabel>
        <Select
          labelId="demo-multiple-movie-label"
          id="demo-multiple-movie"
          multiple
          value={selectedMovies}
          onChange={handleChange}
          input={<OutlinedInput label="Select Movies" />}
          MenuProps={MenuProps}
        >
          {uniqueMovies.map((movie) => (
            <MenuItem
              key={movie?.id}
              value={movie}
              style={getStyles(movie?.year, selectedMovies, theme)}
            >
              {movie?.year}
              {/* Display the year and title in the dropdown */}
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
