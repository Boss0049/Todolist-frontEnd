import React, { useState } from "react";
import "./App.css";
import LocalStorageService from "./services/LocalStorageService";
import PrivateRoutes from "./components/private-routes/PrivateRoutes";

function App() {
  const [role, setRole] = useState(LocalStorageService.getRole());

  return (
    <div className="App">
      <PrivateRoutes role={role} setRole={setRole} />
    </div>
  );
}

export default App;
