export const Button = ({title, onClick}) => {
    return <button className="btn btn btn-success" onClick={onClick}>{title}</button>;
};