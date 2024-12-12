import { useState } from "react";
import "./App.css";
import NormalModal from "./components/NormalModal";

function App() {
  const [modalisOpen, setModalIsOpen] = useState(false);
  const [modalId, setModalId] = useState(1);

  const onClickNext = () => {
    if (modalId <= 2) {
      setModalId((prev) => prev + 1);
    } else if (modalId === 3) {
      setModalIsOpen(false);
    }
  };

  return (
    <>
      <div className="bg-yellow-200 h-screen p-20 relative">
        <h1 className="text-3xl font-bold underline text-center mb-8">モーダル練習</h1>
        <NormalModal
          modalisOpen={modalisOpen}
          setModalIsOpen={setModalIsOpen}
          setModalId={setModalId}
        >
          {modalId === 1 && (
            <div>
              <h2>モーダル1</h2>
              <p>モーダル1の内容</p>
              <button onClick={onClickNext}>次に進む</button>
            </div>
          )}
          {modalId === 2 && (
            <div>
              <h2>モーダル2</h2>
              <p>モーダル2の内容</p>
              <button onClick={onClickNext}>次に進む</button>
            </div>
          )}
          {modalId === 3 && (
            <div>
              <h2>モーダル3</h2>
              <p>モーダル3の内容</p>
              <button onClick={onClickNext}>次に進む</button>
            </div>
          )}
        </NormalModal>
      </div>
    </>
  );
}

export default App;
