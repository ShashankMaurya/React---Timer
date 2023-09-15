import React from "react";

function App() {

  setInterval(updateTime, 1000);
   
  const [newTime, setTime] = React.useState(new Date().toLocaleTimeString());

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{newTime}</h1>
    </div>
  );

}



export default App;