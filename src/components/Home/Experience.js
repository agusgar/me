import React from "react";
import { makeStyles } from "@material-ui/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import TodayIcon from "@material-ui/icons/Today";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  landingRow: {
    display: "flex",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
    },
  },
  landingRowImageContainer: {
    flexGrow: 1,
    padding: 20,
    width: "100%",
    height: 350,
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
  timelineImage: {
    backgroundImage: "url(timeline-illustration-black.png)",
  },
  timelineOppositeContent: {
    paddingTop: 15,
  },
  skillLabel: {
    marginRight: 10,
    marginLeft: 20,
  },
  timelineItemContent: {
    paddingBottom: "2rem",
    textAlign: "left",
  },
}));
function Experience() {
  const classes = useStyles();

  return (
    <Box className={classes.root} marginTop={5}>
      <div className={classes.landingRow}>
        <div className={classes.landingRowImageContainer}>
          <div
            className={clsx(classes.landingRowImage, {
              [classes.timelineImage]: true,
            })}
          ></div>
        </div>
        <div className={classes.landingRowDescription}>
          <Typography variant="h2">Experience</Typography>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  Today
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <TodayIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  Outlast
                </Typography>
                <Typography color="textSecondary">
                  At the moment working on Outlast
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  March 2020
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  Outlast
                </Typography>
                <Typography color="textSecondary">
                  Started working on Outlast
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  July 2019
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  eProfe
                </Typography>
                <Typography color="textSecondary">
                  Started my own project about e-Learning
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  Oct 2017
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  Ascentis
                </Typography>
                <Typography color="textSecondary">
                  Started working on Ascentis
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  Oct 2016
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  Tarmac.io
                </Typography>
                <Typography color="textSecondary">
                  Started working on Tarmac
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  July 2012
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  Despegar.com
                </Typography>
                <Typography color="textSecondary">
                  Started working on Despegar
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  Feb 2011
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  GiGlobalJob
                </Typography>
                <Typography color="textSecondary">
                  Started working on GiGlobalJob
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                className={classes.timelineOppositeContent}
              >
                <Typography variant="body2" color="textSecondary">
                  March 2009
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <SchoolIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Typography variant="h6" component="h1">
                  Universidad ORT
                </Typography>
                <Typography color="textSecondary">
                  Started my bachelors degree
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </Box>
  );
}

export default Experience;
