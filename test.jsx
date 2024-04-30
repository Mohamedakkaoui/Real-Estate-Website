const { useState } = React;
const { Button, Dialog, DialogTitle, DialogContent, DialogActions } = MaterialUI;


function LoginDialog(props) {
  const { open, setLoginOpen, setSignupOpen } = props;

  const switchSignup = (event) => {
    setLoginOpen(false)
    setSignupOpen(true)
  }

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">LOGIN</DialogTitle>
      <DialogContent>If you don't have an account, press SIGNUP</DialogContent>
      <DialogActions>
        <Button onClick={(event) => {setLoginOpen(false)}}>CLOSE</Button>
        <Button>LOGIN</Button>
        <Button onClick={switchSignup}>SIGNUP</Button>
      </DialogActions>
    </Dialog>
  );
}

function SignupDialog(props) {
  const { open, setLoginOpen, setSignupOpen } = props;

  const switchLogin = (event) => {
    setSignupOpen(false)
    setLoginOpen(true)
  }

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">SIGNUP</DialogTitle>
      <DialogContent>If you have an account, press LOGIN</DialogContent>
      <DialogActions>
        <Button onClick={(event) => {setSignupOpen(false)}}>CLOSE</Button>
        <Button>SIGNUP</Button>
        <Button onClick={switchLogin}>LOGIN</Button>
      </DialogActions>
    </Dialog>
  );
}

const App = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  
  const handleLogin = (event) => {
    setLoginOpen(true)
  }
  
  const handleSignup = (event) => {
    setSignupOpen(true)
  }
    
  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleLogin} >
        LOGIN
      </Button>
      <Button variant='outlined' color='primary' onClick={handleSignup} >
        SIGNUP
      </Button>
      <LoginDialog open={loginOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
      <SignupDialog open={signupOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));