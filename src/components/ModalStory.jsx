/* eslint-disable react/prop-types */
const ModalStory = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div>
      <div>{children}</div>
      <div>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalStory;
