import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Meus projetos</Title>
      <Typography component="p" variant="h4">
        3
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Em 2020
      </Typography>
      <Title>Total de projetos</Title>
      <Typography component="p" variant="h4">
        395
      </Typography>
    </React.Fragment>
  );
}
