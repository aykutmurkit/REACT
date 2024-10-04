import React from "react";
import FullScreenWrapper from "./FullScreenWrapper";
import MapComponent from "./MapComponent";

function App() {
  return (
    <FullScreenWrapper>
      {(isFullscreen) => <MapComponent isFullscreen={isFullscreen} />}
    </FullScreenWrapper>
  );
}

export default App;
