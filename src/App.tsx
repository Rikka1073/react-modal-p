import { useState } from "react";
import "./App.css";
import NormalModal from "./components/NormalModal";

function App() {
  const [openModalId, setOpenModalId] = useState(null);

  return (
    <>
      <div className="bg-teal-500 h-screen p-20 relative">
        <h1 className="text-3xl font-bold underline text-center mb-8">モーダル練習</h1>
        <NormalModal modalId="modal1" openModalId={openModalId} setOpenModalId={setOpenModalId}>
          aaaa
        </NormalModal>
        <NormalModal modalId="modal2" openModalId={openModalId} setOpenModalId={setOpenModalId}>
          bbbb
        </NormalModal>
        <NormalModal modalId="modal3" openModalId={openModalId} setOpenModalId={setOpenModalId}>
          cccc
        </NormalModal>
      </div>
    </>
  );
}

export default App;
