import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const usePasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    const inputType = showPassword ? "text" : "password";
    const Icon = showPassword ? FaRegEyeSlash : FaRegEye;

    return { inputType, Icon, toggleVisibility };
};

export default usePasswordToggle;