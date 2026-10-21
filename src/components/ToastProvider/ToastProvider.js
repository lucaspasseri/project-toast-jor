import React from "react";
import useKeyDown from "../../hooks/useEscapeKey/useKeyDown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastArr, setToastArr] = React.useState([]);

	const addToast = (message, variant) => {
		const id = crypto.randomUUID();

		const newToast = {
			id,
			message,
			variant,
		};

		setToastArr(prev => [...prev, newToast]);
	};

	const handleClose = id => {
		setToastArr(prev => prev.filter(toast => toast.id !== id));
	};

	const handleEscapeKey = e => {
		const key = e.code;

		if (key !== "Escape") return;

		setToastArr([]);
	};

	useKeyDown({ callback: handleEscapeKey });

	return (
		<ToastContext.Provider value={{ toastArr, addToast, handleClose }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
