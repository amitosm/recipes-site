import React from "react";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";

function InputAndLabel({
  styles,
  label,
  color,
  value,
  handleChange,
  inputType,
}) {
  return (
    <Box sx={styles}>
      <TextField
        label={label}
        color={color}
        value={value}
        onChange={
          handleChange
            ? (e) => handleChange(label.toLowerCase(), e.target.value)
            : null
        }
        type={inputType}
        focused
      />
    </Box>
  );
}

export default InputAndLabel;
