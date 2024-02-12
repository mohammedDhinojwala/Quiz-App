import { useState, useEffect } from "react";
import Card from "./component/Card";

const App = () => {
  function bntclick() {
    console.log("clicked");
    setfrontPage(false);
  }

  const [frontPage, setfrontPage] = useState(true);


  return (
    <>
      {frontPage ? (
        <>
        <div className="f-main">

          <h1 className="f-heading">Quiz Game</h1>
          <div className="f-buttonCard" onClick={bntclick}>
            <button className="f-btn">Enter Quiz</button>
          </div>
          </div>
        </>
      ) : (
        <Card />
      )}
    </>
  );
};

export default App;
