import { useState } from "react";
import "./App.css";
import NormalModal from "./components/NormalModal";

function App() {
  const [modalIsOpen, setisOpen] = useState(false);
  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <NormalModal modalIsOpen={modalIsOpen} setisOpen={setisOpen} />
    </>
  );
}

export default App;
