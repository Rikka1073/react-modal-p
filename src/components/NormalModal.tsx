import Modal from "react-modal";
const NormalModal = ({ modalisOpen, setModalIsOpen, setModalId, children }) => {
  const onclickClose = () => {
    setModalIsOpen(false);
  };

  const onClickOpen = () => {
    setModalIsOpen(true);
    setModalId(1);
  };

  return (
    <div>
      <Modal isOpen={modalisOpen}>
        <button onClick={onclickClose}>モーダルを閉じる</button>
        <div>{children}</div>
      </Modal>
      <button onClick={onClickOpen}>モーダルを開く</button>
    </div>
  );
};

export default NormalModal;
