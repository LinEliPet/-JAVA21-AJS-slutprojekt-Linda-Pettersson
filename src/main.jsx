import ReactDOM from "react-dom/client";
import { useState } from "react";
import LogIn from "./components/LogIn";
import Shop from "./components/Shop";

function App() {
  const [logged, setLogged] = useState(false);
  const [stateName, setStateName] = useState("");

  function ChangeSetLogged() {
    setLogged(!logged);
  }

  return (
    <>
      {logged ? 
      (<Shop change={ChangeSetLogged} name={stateName}/>) 
      : 
      (<LogIn change={ChangeSetLogged} setStateName={setStateName}/>)}
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
