export const ModalBackground = ({children, onClose}) => {
    return (
        <div className="modal fade show d-block" onClick={() => onClose(false)} tabIndex="-1" role="dialog">
            <div style={{ background: 'rgba(0, 0, 0, 0.5)' }} className="position-fixed top-0 left-0 vw-100 vh-100 fade show ">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    {children}
                </div>
            </div>
        </div>
    );
};

//
// position: fixed;
// top: 0;
// left: 0;
// z-index: var(--bs-backdrop-zindex);
// width: 100vw;
// height: 100vh;