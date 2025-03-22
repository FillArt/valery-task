export const ModalBackground = ({children, onClose}) => {
    return (
        <div className="modal fade show d-block" onClick={() => onClose(false)} tabIndex="-1" role="dialog">
            <div className="modal-backdrop fade show">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    {children}
                </div>
            </div>
        </div>
    );
};