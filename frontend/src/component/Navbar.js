import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  return (
    <AppBar position="fixed" className="header-class">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          DigitalChameleon Career
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => history.push("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => history.push("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => history.push("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => history.push("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => history.push("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => history.push("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => history.push("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => history.push("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => history.push("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => history.push("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
