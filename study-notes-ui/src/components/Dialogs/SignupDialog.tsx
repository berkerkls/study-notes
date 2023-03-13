import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineClose } from "react-icons/ai";
import { Divider, Link } from "@mui/material";
import { useEffect } from "react";

interface SignupDialogInterface {
  closeSignup: any;
  signup: boolean;
  loginOpen: any;
}

function SignupDialog({
  closeSignup,
  signup,
  loginOpen,
}: SignupDialogInterface) {
  const handleLoginOpen = () => {
    loginOpen();
    closeSignup();
  };

  return (
    <Dialog open={signup} onClose={closeSignup}>
      <DialogTitle className="relative text-center text-emerald-500">
        Sign Up
        <Button
          className="absolute right-0 top-5 hover:bg-transparent"
          onClick={closeSignup}
        >
          <AiOutlineClose className="text-indigo-700" />
        </Button>
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          autoFocus
          id="name"
          label="Email Address"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Full Name"
          type="text"
          className="mt-2"
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Username"
          type="text"
          className="mt-2"
          fullWidth
        />
        <TextField
          margin="dense"
          id="name"
          label="Password"
          type="password"
          className="mt-2"
          fullWidth
        />
      </DialogContent>
      <DialogActions className="mb-2">
        {/* todos: Login button functionı backend geldiğinde bağlanacak */}
        <Button
          className="btn bg-emerald-500 w-2/3 mx-auto hover:bg-emerald-500 hover:opacity-80"
          onClick={closeSignup}
        >
          Sign Up
        </Button>
      </DialogActions>
      <Divider />
      <DialogContentText className="flex flex-row justify-between items-center w-2/4 mx-auto p-5">
        <span>Already have an account?</span>
        <Link className="no-underline" onClick={handleLoginOpen}>
          Login
        </Link>
      </DialogContentText>
    </Dialog>
  );
}

export default SignupDialog;
