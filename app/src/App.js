import React from 'react';
import io from "socket.io-client";

import Chat from "./components/chat";

function App() {
  return (
    <div>
      <Chat />
    </div>
  );
}

export default App;
