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
import LoginContext from "@/context/login/LoginContext";
import { useContext } from "react";

interface SignupContextType {
  signup: boolean;
  dispatch: Function;
}

function SignupDialog() {
  const { signup, dispatch }: SignupContextType = useContext(LoginContext);

  const handleClose = () => {
    dispatch({
      type: "SIGNUP_CLOSE",
    });
  };

  const SignupToLogin = () => {
    dispatch({
      type: "SIGNUP_TO_LOGIN",
    });
  };

  return (
    <Dialog open={signup} onClose={handleClose}>
      <DialogTitle className="relative text-center text-emerald-500">
        Sign Up
        <Button
          className="absolute right-0 top-5 hover:bg-transparent"
          onClick={handleClose}
        >
          <AiOutlineClose className="text-emerald-500" />
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
          onClick={handleClose}
        >
          Sign Up
        </Button>
      </DialogActions>
      <Divider />
      <DialogContentText className="flex flex-row justify-between items-center w-2/4 mx-auto p-5">
        <span>Already have an account?</span>
        <Link
          className="no-underline mr-2 cursor-pointer text-indigo-700"
          onClick={SignupToLogin}
        >
          Login
        </Link>
      </DialogContentText>
    </Dialog>
  );
}

export default SignupDialog;
