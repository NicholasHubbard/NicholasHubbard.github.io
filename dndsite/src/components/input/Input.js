import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function Input() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Search..."
          helperText="Use this to find what you want!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="filled"
        />
      </div>
    </div>
  );
}
