import Modal from "react-modal";

const NormalModal = ({ setOpenModalId, openModalId, children, modalId }) => {
  const isOpen = openModalId === modalId;
  return (
    <div>
      <Modal isOpen={isOpen}>
        <button onClick={() => setOpenModalId(null)}>モーダルを閉じる</button>
        <div>{children}</div>
      </Modal>
      <button onClick={() => setOpenModalId(modalId)}>モーダルを開く</button>
    </div>
  );
};

export default NormalModal;
