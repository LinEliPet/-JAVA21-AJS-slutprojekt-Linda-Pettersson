import { useState } from "react";

export default function LogIn({ change, setStateName }) {
  const [name, setName] = useState("");

  function handleClick(event) {
    event.preventDefault();
    alert(`You're logging in as "${name}".`);
    console.log("Submitted");
    setStateName(name);
    change();
  }

  function handleChange(event) {
    setName(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <p>Welcome!</p>
      <p>Please log in to shop:</p>
      <form>
        <input type="text" placeholder="Username" onChange={handleChange} />

        <button onClick={handleClick}>Log in</button>
      </form>
    </>
  );
}
