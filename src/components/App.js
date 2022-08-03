import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Register, Header, Login, Me, MyRoutines, Routines, Activities, Logout } from "./";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRoutines, setUserRoutines] = useState([]);
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <>
        <Routes>
          <Route path="/users/register" element={<Register />} />
          <Route
            path="/users/Login"
            element={
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/users/me" element={<Me loggedIn={loggedIn}/>} />
          <Route path="/routines" element={<Routines allRoutines={allRoutines} setAllRoutines={setAllRoutines}/>} />
          <Route path="/users/myroutines" element={<MyRoutines loggedIn={loggedIn} username={username} userRoutines={userRoutines} setUserRoutines={setUserRoutines}/>} />
          <Route path="/activities" element={<Activities allActivities={allActivities} setAllActivities={setAllActivities} nameInput={nameInput} setNameInput={setNameInput} descriptionInput={descriptionInput} setDescriptionInput={setDescriptionInput} />} />
          <Route path="header" element={<Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUsername={setUsername} setPassword={setPassword}/>} />
          <Route path="Logout" element={<Logout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </>
    </div>
  );
};
export default App;
