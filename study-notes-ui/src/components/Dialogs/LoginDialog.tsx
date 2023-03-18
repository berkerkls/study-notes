import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AiOutlineClose } from "react-icons/ai";
import { Divider, Link } from "@mui/material";
import SignupDialog from "./SignupDialog";
import { useContext } from "react";
import LoginContext from "@/context/login/LoginContext";

interface LoginDialogContextType {
  login: boolean;
  dispatch: Function;
}

function LoginDialog() {
  const { login, dispatch }: LoginDialogContextType = useContext(LoginContext);

  const handleClose = () => {
    dispatch({
      type: "LOGIN_CLOSE",
    });
  };

  const LoginToSignUp = () => {
    dispatch({
      type: "LOGIN_TO_SIGNUP",
    });
  };

  return (
    <div>
      <Dialog open={login} onClose={handleClose}>
        <DialogTitle className="relative text-center text-indigo-700">
          Login
          <Button
            className="absolute right-0 top-5 hover:bg-transparent"
            onClick={handleClose}
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
            label="Password"
            type="password"
            className="mt-5"
            fullWidth
          />
        </DialogContent>
        <DialogActions className="mb-2">
          {/* todos: Login button functionı backend geldiğinde bağlanacak */}
          <Button
            className="btn bg-indigo-700 w-2/3 mx-auto hover:bg-indigo-700 hover:opacity-80"
            onClick={handleClose}
          >
            Login
          </Button>
        </DialogActions>
        <Divider />
        <DialogContentText className="flex flex-row justify-between items-center w-3/4 mx-auto p-5">
          <span className="ml-2">Don't you have an account? </span>
          <Link
            className="mr-2 no-underline cursor-pointer text-emerald-500"
            onClick={LoginToSignUp}
          >
            Signup
          </Link>
        </DialogContentText>
      </Dialog>
    </div>
  );
}

export default LoginDialog;
