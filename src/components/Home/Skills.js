import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box, Avatar } from "@material-ui/core";
import clsx from "clsx";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(1),
  },
  landingRow: {
    display: "flex",
    height: 380,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
    },
  },
  landingRowImageContainer: {
    flexGrow: 1,
    padding: 20,
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      order: 1,
      padding: 0,
    },
  },
  landingRowImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: 280,
      backgroundSize: "cover",
    },
  },
  landingRowDescription: {
    flexGrow: 1,
    width: "100%",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      order: 2,
      padding: 0,
    },
  },
  skillsImage: {
    backgroundImage: "url(skills-illustration-amber.png)",
  },
  aboutmeImage: {
    backgroundImage: "url(aboutme-illustration.png)",
  },
  skillLabel: {
    marginRight: 10,
    marginLeft: 20,
  },
}));

function Skills() {
  const classes = useStyles();
  const skills = [
    { label: "Javascript", imgs: ["skill-js.png"] },
    { label: "Typescript", imgs: ["skill-typescript.jpg"] },
    {
      label: "HTML/CSS/SASS",
      imgs: ["skill-html.jpg", "skill-css.jpg", "skill-sass.jpg"],
    },
    { label: "React/Redux", imgs: ["skill-react.png", "skill-redux.png"] },
    { label: "Webpack", imgs: ["skill-webpack.jpg"] },
    { label: "NodeJS", imgs: ["skill-nodejs.png"] },
    { label: "ExpressJS", imgs: ["skill-express.png"] },
    { label: "MongoDB", imgs: ["skill-mongodb.jpg"] },
    {
      label: "Google Cloud Platform/Firebase/Big Query",
      imgs: [
        "skill-googlecloud.jpg",
        "skill-firebase.png",
        "skill-bigquery.jpg",
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <div className={classes.landingRow}>
        <div className={classes.landingRowImageContainer}>
          <div
            className={clsx(classes.landingRowImage, {
              [classes.aboutmeImage]: true,
            })}
          ></div>
        </div>
        <div className={classes.landingRowDescription}>
          <Box padding={2}>
            <Typography variant="h2">About me</Typography>
            <Typography>
              I have 10+ years of Javascript development experience. I am
              motivated to gain knowledge regarding the JS ecosystem
              continuously. Big fan of clean code and functional programming
              principles.
            </Typography>
          </Box>
        </div>
      </div>
      <div className={classes.landingRow}>
        <div className={classes.landingRowDescription}>
          <Typography variant="h2">Skills</Typography>
          {skills.map((skill) => (
            <Box
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginBottom={1}
            >
              <Typography className={classes.skillLabel}>
                {skill.label}
              </Typography>
              {skill.imgs.length === 1 && (
                <Avatar
                  alt={skill.label}
                  src={skill.imgs[0]}
                  sx={{ width: 24, height: 24 }}
                />
              )}
              {skill.imgs.length > 1 && (
                <AvatarGroup>
                  {skill.imgs.map((img, index) => (
                    <Avatar
                      key={index}
                      alt={`${skill.label}-${index}`}
                      src={img}
                      sx={{ width: 24, height: 24 }}
                    />
                  ))}
                </AvatarGroup>
              )}
            </Box>
          ))}
        </div>
        <div className={classes.landingRowImageContainer}>
          <div
            className={clsx(classes.landingRowImage, {
              [classes.skillsImage]: true,
            })}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
