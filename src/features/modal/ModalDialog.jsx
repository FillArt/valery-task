export const ModalDialog = ({children, title, onClose}) => {
    return (
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" onClick={onClose}/>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
                <button className="btn btn-secondary" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};