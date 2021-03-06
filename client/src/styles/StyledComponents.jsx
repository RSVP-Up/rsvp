import React from 'react';
import {
  withStyles,
  Grid,
  Checkbox,
  Button,
  Typography,
  Card
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Roboto = 'Roboto, sans-serif'

const styles = theme => ({
  closeButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export const Container = withStyles(() => ({
  root: {
    backgroundColor: '#fff',
    border: '#e6e6e6 solid 1px',
    maxWidth: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20%'
  }

}))(Grid);

export const EventInfoContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  }

}))(Grid);

export const TextButtonContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

}))(Grid);

export const FavoriteButton = withStyles(() => ({
  root: {
    border: '#c5c4c4 solid 1px',
    borderRadius: '8px',
    width: 54,
    height: 54,
    marginLeft: 60,
    '&:hover': {
      backgroundColor: 'transparent',
    }
  }

}))(Checkbox);

export const AttendButton = withStyles(() => ({
  root: {
    backgroundColor: '#f55858',
    borderRadius: '8px',
    width: 114,
    height: 54,
    color: '#fff',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#f55758',
      opacity: '0.9',
      transition: '0.3s'
    },
    fontWeight: 600,
    marginLeft: 20,
    fontFamily: Roboto,
    fontSize: 16,
  },

}))(Button);

export const TimeDate = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 16,
    fontWeight: 300
  }

}))(Grid);

export const BoldText = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 16,
    fontWeight: 600
  }

}))(Grid);

export const DialogClose = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export const AvatarHeaderContainer = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 10
  }

}))(Grid);

export const HeaderContainer = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0px 60px',
    lineHeight: 'normal'
  }

}))(Grid);

export const DialogHeader = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 28,
    fontWeight: 600
  }

}))(Grid);

export const SubheaderContainer = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0px 0px 20px 0px'
  }

}))(Grid);

export const DialogSubheader = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 14
  }

}))(Typography);

export const TealButton = withStyles(() => ({
  root: {
    border: '#0098ab solid 1px',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    width: 149,
    height: 42,
    color: '#0098ab',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#0098ab',
      color: '#fff'
    },
    fontWeight: 600,
    fontFamily: Roboto,
    fontSize: 14,
  },

}))(Button);

export const CalendarBtnContainer = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
  }

}))(Grid);

export const EventContainer = withStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }

}))(Grid);

export const EventCard = withStyles(() => ({
  root: {
    width: 328,
    height: 170
  }

}))(Card);

export const ShareButton = withStyles(() => ({
  root: {
    border: '#757575 solid 1px',
    backgroundColor: '#e6e6e6',
    borderRadius: '8px',
    width: 129.56,
    height: 54,
    color: '#757575',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#c5c4c4',
    },
    fontWeight: 600,
    marginLeft: 20,
    fontFamily: Roboto,
    fontSize: 16,
  },

}))(Button);

export const ShareDialogText = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    fontSize: 18,
    color: '#00a2c7',
    cursor: 'pointer'
  }

}))(Grid);

export const EditButton = withStyles(() => ({
  root: {
    color: '#0098ab',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    fontFamily: Roboto,
    fontSize: 16,
    padding: 'none'
  },

}))(Button);

export const NotGoingButton = withStyles(() => ({
  root: {
    border: '#a2a2a2 solid 1px',
    backgroundColor: '#e6e6e6',
    borderRadius: '8px',
    width: 170,
    height: 42,
    color: '#757575',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#c5c4c4',
    },
    fontWeight: 600,
    fontFamily: Roboto,
    fontSize: 14,
    marginRight: 20
  },

}))(Button);

export const EditContainer = withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20,
    paddingRight: 20
  }

}))(Grid);

export const EditTextContainer = withStyles(() => ({
  root: {
    fontFamily: Roboto,
    padding: '40px 0px 20px 0px',
    marginBottom: 40
  }

}))(Grid);
