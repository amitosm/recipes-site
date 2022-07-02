import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function HoverPopover({
  handlePopoverClose,
  open,
  anchorEl,
  popoverText,
}) {
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
    >
      <Typography sx={{ p: 1, maxWidth: "280px" }}>{popoverText}.</Typography>
    </Popover>
  );
}
