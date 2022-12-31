import { InputAdornment, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Node } from "./StructuralSolverApp";

type nodeCardProps = {
  node: Node | null | undefined;
  isSelected: boolean;
  updateNode: Function;
  systemProperties: { pixelToMeterRatio: number; groundReference: number };
};

function NodeCard(props: nodeCardProps) {
  if (!props.node) return <></>;

  return (
    <Paper
      elevation={2}
      sx={{
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        width: "auto-fit",
      }}
    >
      <Typography variant="body1">
        <b>{`Node ${props.node.id}`}</b>
      </Typography>
      <TextField
        size="small"
        variant="outlined"
        label="X Position"
        sx={{ width: "100%" }}
        type="number"
        defaultValue={(
          props.node.x / props.systemProperties.pixelToMeterRatio
        ).toFixed(3)}
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        onChange={(event) => {
          console.log(+event.target.value);
          if (!props.node) return;
          props.node.x =
            +event.target.value * props.systemProperties.pixelToMeterRatio;
          props.updateNode(props.node);
        }}
      />
      <TextField
        size="small"
        type="number"
        variant="outlined"
        label="Y Position"
        sx={{ width: "100%" }}
        defaultValue={(
          (props.systemProperties.groundReference - props.node.y) /
          props.systemProperties.pixelToMeterRatio
        ).toFixed(3)}
        InputProps={{
          endAdornment: <InputAdornment position="end">m</InputAdornment>,
        }}
        onChange={(event) => {
          console.log(+event.target.value);
          if (!props.node) return;
          props.node.y =
            -event.target.value * props.systemProperties.pixelToMeterRatio +
            props.systemProperties.groundReference;
          props.updateNode(props.node);
        }}
      />
      <TextField
        size="small"
        variant="outlined"
        type="number"
        label="Mass"
        sx={{ width: "100%" }}
        defaultValue={props.node.mass.toFixed(3)}
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        onChange={(event) => {
          console.log(+event.target.value);
          if (!props.node) return;
          props.node.mass = +event.target.value;
          props.updateNode(props.node);
        }}
      />
    </Paper>
  );
}

export default NodeCard;
