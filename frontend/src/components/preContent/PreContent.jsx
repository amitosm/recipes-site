import { Breadcrumbs } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function PreContent({ listOfActions }) {
  return (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      {listOfActions &&
        listOfActions.map((action) => (
          <MuiLink
            key={action.path}
            component={Link}
            underline="hover"
            color="inherit"
            to={action.path}
          >
            {action.innerHtml}
          </MuiLink>
        ))}
    </Breadcrumbs>
  );
}

export default PreContent;
