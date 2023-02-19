import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {},
  gridContainer: {},
  gridItem: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  latestPostsH1: {
    textAlign: "center",
  },
  card: {},
});

export default function MediaCard({ posts }) {
  const classes = useStyles();
  return (
    <>
      <Container>
        {/* <Typography variant="h5" component="h1" align="center" gutterBottom> */}
        <h1 className={classes.latestPostsH1}> Latest Posts </h1>
        {/* </Typography> */}
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid
              item
              key={post.id}
              className={classes.gridItem}
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Card>
                <Link
                  href={`/blog/${post.id}`}
                  color="inherit"
                  underline="none"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random/?Cryptocurrency"
                    title="Random Image"
                  />
                  <CardContent>
                    <Typography
                      align="center"
                      variant="subtitle2"
                      component="h3"
                    >
                      {post.title.slice(0, 40)}
                      {post.title.slice(0, 40) !== post.title && "......"}
                    </Typography>
                    <Typography
                      align="justify"
                      variant="body2"
                      color="textSecondary"
                    >
                      {post.content.slice(0, 50)}........
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
