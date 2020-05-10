import React from "react";
import { Container, Grid } from "@material-ui/core";

export default () => {
  return (
    <div>
      <Container>
        <Grid container justify="center" alignItems="center" direction="column">
          <Grid item>
            <h1>Welcome to Tariqule.com</h1>
          </Grid>

          <Grid item>
            <h2>Api testing site and portfolio.</h2>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
