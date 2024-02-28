import React, { useState, useEffect } from "react";

// Use functional or class component based on your preference.
// Make it a default export.

const LoginForm = ({ onSubmit, user, pswd, setUser, setPswd, disabled }) => {

  return (
      <form name="form1" onSubmit="{onSubmit}">
        <input type="text" value={user} name="username" 
          onChange={evt => setUser(evt.target.value)} />
        <input type="password" value={pswd} name="password" 
          onChange={evt => setPswd(evt.target.value)} />
        <button disabled="{disabled}">Submit</button>
      </form>
  );

}

const App = () => {

  const [user, setUser] = useState('')
  const [pswd, setPswd] = useState('')
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    user && pswd ? setDisabled(false) : setDisabled(true)
  }, [user, pswd])

  const onSubmit = (evt) => {
    evt.preventDefault()
    console.log('user:', user, 'pswd:', pswd)
  }

  return (
    <>
      <LoginForm onSubmit={onSubmit} username={user} password={pswd}
      setUser={setUser} setPswd={setPswd} disabled={disabled} />
    </>
  )

}

export default App