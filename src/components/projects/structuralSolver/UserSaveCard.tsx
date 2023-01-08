import { Button, Paper, Typography } from "@mui/material";
import React from "react";

type UserSaveCardProps = {
  structureName: string;
  loadStructure: Function;
  deleteStructure: Function;
  isPreset?: boolean;
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
        variant="contained"
        onClick={() => {
          props.loadStructure(props.structureName);
        }}
      >{`Load: ${props.structureName}`}</Button>
      {!props.isPreset && (
        <Button
          variant="contained"
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
