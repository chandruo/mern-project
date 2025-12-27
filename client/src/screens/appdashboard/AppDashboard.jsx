import { useState } from "react";

export default function AppDashboard () {
  
  const users=[{name:"John Doe", email:"aa"},
    {name:"John Doe", email:"asdf"}]
 const [count, setCount] = useState(0);
    function handleClick(e) {
        console.log(e.target);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        console.log(count);
    }
  return (
    <div onClick={handleClick}>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  )
}