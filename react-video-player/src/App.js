import React from "react";
import ReactPlayer from "react-player";
function App() {
  return (
    <div className="App">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=WpYeekQkAdc&list=RDWpYeekQkAdc&start_radio=1"
        controls
        onReady={() => console.log("onReady Callback")}
        onStart={() => console.log("onStart Callback")}
        onPause={() => console.log("onPause Callback")}
        onEnded={() => console.log("onEnded Callback")}
        onError={() => console.log("onError Callback")}
      />
    </div>
  );
}

export default App;
