import React from "react";
import clsx from "clsx";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Image } from "components/atoms";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  imageWrapper: {
    position: "relative",
    height: 400,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "0% 0%",
  },
  cover: {
    background: theme.palette.grey[900],
    opacity: 0.5,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  content: {
    position: "absolute",
    padding: theme.spacing(2),
    top: "50%",
    transform: "translateY(-50%)",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      transform: "none",
      padding: theme.spacing(0, 4),
    },
  },
}));

/**
 * Component to display the side image hero
 *
 * @param {Object} props
 */
const HeroSideImage = ({
  imageSrc,
  imageSrcSet,
  children,
  backgroundColor,
  reverse,
  className,
  ...rest
}: HeroSideImageProps): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const useCustomStyles = makeStyles(() => ({
    coverBg: {
      background: "black",
    },
  }));

  const customClasses = useCustomStyles();

  return (
    <Grid
      container
      className={clsx("hero-side-image", classes.root, className)}
      direction={reverse ? "row-reverse" : "row"}
      {...rest}
    >
      <Grid
        item
        xs={12}
        md={6}
        className={clsx("hero-side-image__image-wrapper", classes.imageWrapper)}
      >
        <Image
          src={imageSrc}
          srcSet={imageSrcSet ? imageSrcSet : ""}
          alt={"..."}
          className={clsx("hero-side-image__image", classes.image)}
          lazy={false}
        />
        <div
          className={clsx(
            "hero-side-image__cover",
            isMd && classes.cover,
            backgroundColor ? customClasses.coverBg : {},
          )}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className={clsx("hero-side-image__content", classes.content)}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default HeroSideImage;
