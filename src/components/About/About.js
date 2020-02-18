import React, { Fragment } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import twentyFour from "./../../images/twentyfourbyseven1.png";
import unlimitedImage from "./../../images/unlimited.png";
import cheapImage from "./../../images/cheap.png";
import fastImage from "./../../images/fast.png";

const About = (
  {
    boxSection,
    center,
    my4,
    heightFluid,
    root,
    zeroRadius,
    pt4,
    textCenter,
    imgFluid,
    cardItem,
  },
  props,
) => {
  console.log(props.history);
  return (
    <Fragment>
      <Container maxWidth="lg" className={boxSection} id="about">
        <Grid container className={center}>
          <Grid item sm={6} className={my4}>
            <Box className={`${heightFluid} ${center}`}>
              <Card className={`${root} ${zeroRadius} ${pt4}`}>
                <CardActionArea className={textCenter}>
                  <img src={twentyFour} alt="" className={imgFluid} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="h2"
                      className={cardItem}
                    >
                      UNLIMITED ACCESS TO BOTS AND MESSAGES
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item sm={6} className={my4}>
            <Box className={`${heightFluid} ${center}`}>
              <Card className={`${root} ${zeroRadius} ${pt4}`}>
                <CardActionArea className={textCenter}>
                  <img src={unlimitedImage} alt="" className={imgFluid} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="h2"
                      className={cardItem}
                    >
                      UNLIMITED ACCESS TO BOTS AND MESSAGES
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        </Grid>
        <Grid container className={center}>
          <Grid item sm={6} className={my4}>
            <Box className={`${heightFluid} ${center}`}>
              <Card className={`${root} ${zeroRadius} ${pt4}`}>
                <CardActionArea className={textCenter}>
                  <img src={cheapImage} alt="" className={imgFluid} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="h2"
                      className={cardItem}
                    >
                      UNLIMITED ACCESS TO BOTS AND MESSAGES
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item sm={6} className={my4}>
            <Box className={`${heightFluid} ${center}`}>
              <Card className={`${root} ${zeroRadius} ${pt4}`}>
                <CardActionArea className={textCenter}>
                  <img src={fastImage} alt="" className={imgFluid} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="h2"
                      className={cardItem}
                    >
                      BUILD AND DEPLOY CHATBOTS WITH MORE FASTER WAY
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default About;
