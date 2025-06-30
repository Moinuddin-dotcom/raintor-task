export function Button({ children, onClick, className = '', type = 'button' }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`cursor-pointer bg-white text-black hover:bg-white transition-colors duration-200 ${className}`}
        >
            {children}
        </button>
    );
}

