import { useState } from 'react';

const useToast = () => {
    const [toast, setToast] = useState(null);

    const showToast = (message: string) => {
        setToast(message);
        setTimeout(() => {
            setToast(null);
        }, 3000);
    };

    return { toast, showToast };
};

export default useToast;