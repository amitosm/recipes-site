import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";

function ListWithOptinalCheckbox({
  objectToMap,
  listHeader,
  checkbox = false,
}) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 720,
        bgcolor: "background.paper",
      }}
    >
      <ListSubheader component="div" id="list-header">
        {listHeader}
      </ListSubheader>
      <Divider variant="" component="li" />
      {Object.keys(objectToMap).map((item) => (
        <ListItem key={item} sx={{ paddingTop: 0, paddingBottom: 0 }}>
          {checkbox && <Checkbox />}
          <ListItemText
            primary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body1"
                color="text.primary"
              >
                {item},
              </Typography>
            }
            secondary={
              <Typography
                // sx={{ display: { xs: "block", md: "inline" } }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {objectToMap[item]}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default ListWithOptinalCheckbox;
