import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";


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
  let navigate = useNavigate();

  const handleClick = (location) => {
    console.log(location);
    // history.push(location);
    navigate(location)
  };

  return (
    <AppBar position="fixed" style={{backgroundColor:"#3498db"}}>
      <Toolbar>
        <Typography onClick={() => handleClick("/")} variant="h6" style={{color:"#000"}} className={classes.title}>
          <b>Vacancy walet</b>
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="dark" onClick={() => handleClick("/home")}>
                <b>Home</b>
              </Button>
              <Button color="dark" onClick={() => handleClick("/addjob")}>
                <b>Add Jobs</b>
              </Button>
              <Button color="dark" onClick={() => handleClick("/myjobs")}>
                <b>My Jobs</b>
              </Button>
              <Button color="dark" onClick={() => handleClick("/employees")}>
               <b> Employees</b>
              </Button>
              <Button color="dark" onClick={() => handleClick("/profile")}>
                <b>Profile</b>
              </Button>
              <Button color="dark" onClick={() => handleClick("/logout")}>
                <b>Logout</b>
              </Button>
            </>
          ) : (
            <>
              <Button style={{fontSize:"16px"}} color="dark" onClick={() => handleClick("/home")}>
                <b>Home</b>
              </Button>
              <Button
                color="dark" style={{fontSize:"16px"}}
                onClick={() => handleClick("/applications")}
              >
                <b>Applications</b>
              </Button>
              <Button style={{fontSize:"16px"}} color="dark" onClick={() => handleClick("/profile")}>
              <b>Profile</b>
              </Button>
              <Button style={{fontSize:"16px"}} color="dark" onClick={() => handleClick("/logout")}>
              <b>Logout</b>
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="dark" style={{fontSize:"18px",marginLeft:"-10px"}} onClick={() => handleClick("/login")}>
            <FaUserPlus style={{marginTop:"-5px",marginRight:"5px"}} />
             <b>Login</b> 
            </Button>
            <Button color="dark" style={{fontSize:"18px"}} onClick={() => handleClick("/signup")}>
            <FaUserCheck style={{marginTop:"-5px",marginRight:"5px"}}  />
             <b> Signup</b>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
