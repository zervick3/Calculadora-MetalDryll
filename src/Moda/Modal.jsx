import "./Modal.css";

const Modal = ({ children, isOpen, closeModal, title, area }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <div className="header__modal flex flex-col ">
          {title}{" "}
          {/* <span className="text-red-600 "> SUPERFICIE CALCULADA : {area}</span> */}
        </div>

        <button className=" btnModal modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
