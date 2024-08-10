import { Link } from "react-router-dom";

const Button = ({ link, label, className ="" }) => {
    // const {  } = config;
    return (
        <Link to={link}>
            <button
                className={` bg-[#289278] text-white rounded-md ${className}`}
                aria-label={label}
            >
                {label}
            </button>
        </Link>
    );
};

export default Button;
