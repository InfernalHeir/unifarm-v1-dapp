import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../../assests/images/brand/logo.svg";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "9rem",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(60),
      height: theme.spacing(55)
    }
  },
  logo: {
    display: "flex",
    marginTop: "0.8rem",
    marginBottom: "0.8rem",
    justifyContent: "center"
  },
  logoImage: {
    width: "53%",
    height: "54%",
    background: "white",
    color: "black"
  },
  Buttonstyle: {
    float: "right",
    marginTop: "1rem",
    fontSize: "11px"
  },
  inputDiv: {
    marginTop: "6rem"
  },
  TextFieldclass: {
    width: 440
  },
  btnSubmit: {
    marginTop: "1rem",
    height: 55,
    width: 440,
    borderRadius: 20,
    background: "#EA3F72",
    fontSize: 17,
    fontWeight: 600
  },
  btnStyle: {
    borderRadius: 20,
    width: 440,
    height: 55,
    justifyContent: "space-between",
    color: "black",
    border: "1px solid rgba(0, 0, 0, 0.23)"
  }
}));

const PaperSurface = styled(Paper)`
  border-radius: 50px 15px;
  background: #f8f8ff;
`;

const Stake = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <PaperSurface elevation={3}>
          <div className={classes.logo}>
            <Avatar
              variant="square"
              src={logo}
              className={classes.logoImage}
              id="textFeildBorder"
            >
              UnifarmLogo
            </Avatar>
          </div>
          <Typography variant="body1" gutterBottom>
            "Stake one token, and earn Multiple tokens."
          </Typography>
          <div className={classes.inputDiv}>
            <Typography variant="h5">Calculate Your Earnings</Typography>
          </div>
          <form>
            <Button
              variant="outlined"
              color="primary"
              className={classes.btnStyle}
            >
              <span>Select Token</span>
            </Button>
            <br />
            <TextField
              id="outlined-basic"
              label="Enter No of Token"
              variant="outlined"
              className={classes.TextFieldclass}
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            className={classes.btnSubmit}
          >
            Show Me Available Pools
          </Button>
        </PaperSurface>
      </div>
    </Container>
  );
};

export default Stake;
