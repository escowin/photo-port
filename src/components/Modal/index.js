import React from "react";

// Parent-child relationship
// PhotoList.Modal

const Modal = ({ onClose, currentPhoto }) => {
    // destructured prop
    const {name, category, description, index} = currentPhoto;

    return (
        // JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img
                 src={require(`../../assets/large/${category}/${index}.jpg`)}
                 alt="current category"
                />
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;