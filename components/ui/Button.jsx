export function Button({ children, onClick, className = '', type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer  ${className}`}
        >
            {children}
        </button>
    );
}
