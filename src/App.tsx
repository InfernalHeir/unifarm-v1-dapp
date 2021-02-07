import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
//import Typography from "@material-ui/core/Typography";
import { Button, DialogContent } from "@material-ui/core";
import Modal from "./components/Modal";

const App = () => {
  const [set, setOpen] = useState<{ isOpen: boolean }>({
    isOpen: false,
  });

  const clicked = () => {
    setOpen({
      isOpen: true,
    });
  };

  const onDismiss = () => {
    setOpen({
      isOpen: false,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={clicked}>
        Connect
      </Button>
      <Modal isOpen={set.isOpen} close={onDismiss}>
        <DialogContent>Connect Wallet</DialogContent>
      </Modal>
    </ThemeProvider>
  );
};

export default App;
