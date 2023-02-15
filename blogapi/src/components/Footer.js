import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Footer() {
  return (
    <>
      <Container maxWidth="md">
        <Grid container spacing={0}>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <ul>
              <li>Team</li>
              <li>History</li>
              <li>Contact us</li>
              <li>Locations</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <ul>
              <li>Cool stuff</li>
              <li>Random feature</li>
              <li>Team feature</li>
              <li>Developer stuff</li>
              <li>Another one</li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <ul>
              <li>Resource</li>
              <li>Resource name</li>
              <li>Another resource</li>
              <li>Final resource</li>
            </ul>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <ul>
              <li>Privacy policy</li>
              <li>Terms of use</li>
            </ul>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Typography variant="body2" align="center" paragraph>
            Copyright © Your Website 2023.
          </Typography>
        </Box>
      </Container>
    </>
  );
}
