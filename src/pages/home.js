import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Projects from '../components/Home/Projects';
import Skills from '../components/Home/Skills';

const useStyles = makeStyles({
  image: {
     backgroundImage: `url(home-image.jpg)`,
     backgroundRepeat: 'none',
     backgroundSize: 'cover',
     width: '100%',
     height: 750,
     display: 'flex',
     alignItems: 'center',
  },
  imageText: {
    color: '#fff',
    width: 400,
    marginLeft: 100,
    fontWeight: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  picture: {
    backgroundImage: 'url(tincho.jpg)',
    backgroundSize: 'cover',
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginBottom: 30,
    border: '4px solid #fff',
  },
});

function Home () {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.image}>
        <div className={classes.imageText}>
          <div className={classes.picture} />
          <Typography variant="h3" gutterBottom>Agustin Garbarino</Typography>
          <Typography variant="subtitle" className={classes.imageSubtitle}>SOFTWARE DEVELOPER</Typography>
        </div>
      </div>
      <section>
        <Skills />
      </section>
    </div>
  );
}

export default Home;
