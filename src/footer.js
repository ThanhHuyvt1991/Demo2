import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: '#656a80'
  },
  bigAvatar: {
    width: 200,
    borderRadius: 0,
    height: 45,
    margin: 'auto',
    paddingTop: 10
  },
  footer: {
    height: 100
  },
  p: {
    textAlign: 'center',
    marginTop: 0
  }
}

class Footer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar className={classes.appBar} position="fixed" >
          <div className={classes.footer}>
            <Avatar className={classes.bigAvatar} alt="Remy Sharp" src="/asset/log2.png" />
            <p className={classes.p}>Copyright © DIGI-TEXX 2019. All Rights Reserved.</p>
          </div>
        </AppBar>
      </div>
    )
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Footer);
