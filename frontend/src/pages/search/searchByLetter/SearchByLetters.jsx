import { Box } from "@mui/system";
import React from "react";
import useSearchByLetters from "./useSearchByLetters";
import ResultsView from "../../../components/ResultsView";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

function SearchByLetters() {
  const {
    alphabet,
    status,
    handleRecipeClick,
    currentSearch,
    handleLetterClick,
    letter,
    handleChange,
  } = useSearchByLetters();

  if (status === "loading") {
    return "LOADING";
  }

  return (
    <Box sx={{ mt: 2, width: "100%" }}>
      {/* Letters display */}
      <Box sx={{ mb: 2 }}>
        {/* letters map on desktop */}

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexShrink: 1,
            justifyContent: "center",
          }}
        >
          {alphabet.map((letter) => (
            <Typography
              variant={
                currentSearch?.currentSearchTerm === letter.toLocaleLowerCase()
                  ? "h4"
                  : "h6"
              }
              onClick={() => handleLetterClick(letter)}
              sx={{
                pl: 2,
                margin: 0,
                "&:hover": {
                  cursor: "pointer",
                },
                textDecoration:
                  currentSearch?.currentSearchTerm ===
                  letter.toLocaleLowerCase()
                    ? "underline"
                    : null,
              }}
              key={letter}
            >
              {letter.toLocaleUpperCase()}{" "}
            </Typography>
          ))}
        </Box>

        {/* letters map on mobile screen */}
        <FormControl fullWidth sx={{ display: { md: "none" } }}>
          <InputLabel id="select-label">Letters</InputLabel>
          <Select labelId="select-label" value={letter}>
            {alphabet?.map((letter) => (
              <MenuItem
                onClick={() => handleLetterClick(letter)}
                value={letter}
                key={letter}
              >
                {letter.toLocaleUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* display results */}
      {currentSearch && (
        <ResultsView
          meals={currentSearch.currentMeals}
          handleClickOnMeal={handleRecipeClick}
        />
      )}
    </Box>
  );
}

export default SearchByLetters;
