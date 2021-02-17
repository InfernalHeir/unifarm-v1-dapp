import React from "react";
import UnifarmLogo from "../components/UnifarmLogo";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

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
  }
}));

const PaperSurface = styled(Paper)`
  border-radius: 50px 15px;
  background: #f8f8ff;
`;

interface IAppBody {
  children: React.ReactNode;
  logo?: boolean;
}
const AppBody = ({ children, logo }: IAppBody) => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <PaperSurface>
          {logo && <UnifarmLogo />}
          {children}
        </PaperSurface>
      </div>
    </Container>
  );
};

export default AppBody;
