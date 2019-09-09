import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles({
  projectSections: {
    display: 'flex',
    flexDirection: 'column',
  },
  projectItemSection: {
    display: 'flex',
  },
  projectItemImageContainer: {
    width: '100%',
    padding: 50,
  },
  projectItemImage: {
    maxWidth: '100%',
  },
  projectItemDescriptionContainer: {
    width: '100%',
  }
});

function Projects(props) {
  const classes = useStyles();
  return (
    <div className={classes.projectSections}>
      <div className={classes.projectItemSection}>
        <div className={classes.projectItemImageContainer}>
          <img src="eprofe-1.jpg" alt="something" className={classes.projectItemImage} />
        </div>
        <div className={classes.projectItemDescriptionContainer}>
          Descripcion del proyecto
        </div>
      </div>
    </div>
  );
}

export default Projects;
