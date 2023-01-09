import { Button, Paper } from "@mui/material";
import React from "react";

type UserSaveCardProps = {
  structureName: string;
  loadStructure: Function;
  deleteStructure: Function;
  isPreset?: boolean;
  preset?: string;
};

function UserSaveCard(props: UserSaveCardProps) {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "auto-fit",
      }}
    >
      <Button
        variant="outlined"
        color={props.isPreset ? "secondary" : "primary"}
        fullWidth
        onClick={() => {
          if (props.preset) props.loadStructure(props.preset);
          else props.loadStructure(props.structureName);
        }}
      >{`Load ${props.structureName}`}</Button>

      {!props.isPreset && (
        <Button
          variant="outlined"
          color="error"
          size="large"
          onClick={() => {
            props.deleteStructure(props.structureName);
          }}
        >
          X
        </Button>
      )}
    </Paper>
  );
}

export default UserSaveCard;
