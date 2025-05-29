const ModalStory = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg flex flex-col items-center justify-center shadow-lg max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={onClose}
          className="mt-4 cursor-pointer bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ModalStory;
