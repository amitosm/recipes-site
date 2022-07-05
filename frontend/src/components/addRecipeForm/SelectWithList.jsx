import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function SelectWithList({
  header,
  handleChange,
  valuesList,
  keyName,
  currValue,
  styles = {},
}) {
  console.log(styles);
  return (
    <FormControl
      sx={{ minWidth: { md: 252 }, width: { xs: "100%" }, mr: 2, ...styles }}
    >
      <InputLabel id="select-label">{header}</InputLabel>

      <Select
        fullWidth
        labelId="select-label"
        id={`select-${header}`}
        value={currValue}
        label={header}
        onChange={handleChange}
      >
        {valuesList.map((obj) => {
          return (
            <MenuItem key={obj[keyName]} value={obj[keyName]}>
              {obj[keyName]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default SelectWithList;
