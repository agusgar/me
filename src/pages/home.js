import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Hidden } from '@material-ui/core';
import Projects from '../components/Home/Projects';
import Skills from '../components/Home/Skills';

const useStyles = makeStyles(theme => ({
  imageDesktop: {
     backgroundImage: `url(home-image.jpg)`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
     width: '100%',
     height: 750,
     display: 'flex',
     alignItems: 'center',
  },
  pictureDesktop: {
    backgroundImage: 'url(tincho.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginBottom: 30,
    border: '4px solid #fff',
  },
  imageTextDesktop: {
    color: '#fff',
    width: 400,
    marginLeft: 100,
    fontWeight: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageMobile: {
    backgroundImage: `url(home-image.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: 211,
    display: 'flex',
    alignItems: 'center',
  },
  pictureMobile: {
    backgroundImage: 'url(tincho.jpg)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 160,
    height: 160,
    borderRadius: '50%',
    marginBottom: 30,
    border: '4px solid #fff',
  },
  imageTextMobile: {
    width: '100%',
    fontWeight: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
    color: '#fff',
    padding: '40px 0',
  },
}));

function Home () {
  const classes = useStyles();
  return (
    <div>
      <Hidden mdDown>
        <div className={classes.imageDesktop}>
          <div className={classes.imageTextDesktop}>
            <div className={classes.pictureDesktop} />
            <Typography variant="h3" gutterBottom>Agustin Garbarino</Typography>
            <Typography variant="subtitle" className={classes.imageSubtitle}>SOFTWARE DEVELOPER</Typography>
          </div>
        </div>
      </Hidden>
      <Hidden mdUp>
        <div className={classes.imageMobile}></div>
        <div className={classes.imageTextMobile}>
          <div className={classes.pictureMobile} />
          <Typography variant="h3" gutterBottom>Agustin Garbarino</Typography>
          <Typography variant="subtitle" className={classes.imageSubtitle}>SOFTWARE DEVELOPER</Typography>
        </div>
      </Hidden>
      <section>
        <Skills />
      </section>
    </div>
  );
}

export default Home;
