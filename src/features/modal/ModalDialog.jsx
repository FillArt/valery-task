export const ModalDialog = ({children, title, onClose}) => {
    return (
        <div className="modal-content bg-white z-3" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button type="button" className="btn-close" onClick={() => onClose(false)}/>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
                <button className="btn btn-danger" onClick={() => onClose(false)}>
                    Close
                </button>
            </div>
        </div>
    );
};