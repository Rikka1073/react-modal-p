import Modal from "react-modal";

const NormalModal = ({ setisOpen, modalIsOpen }) => {
  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <button onClick={() => setisOpen((prev) => !prev)}>モーダルを閉じる</button>
      </Modal>
      <button onClick={() => setisOpen((prev) => !prev)}>モーダルを開く</button>
    </div>
  );
};

export default NormalModal;
