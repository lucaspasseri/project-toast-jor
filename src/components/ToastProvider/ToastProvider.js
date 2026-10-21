import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastArr, setToastArr] = React.useState([]);

	const addToast = (message, variant) => {
		console.log(message, variant);

		const id = crypto.randomUUID();

		const handleClose = id => {
			setToastArr(prev => prev.filter(toast => toast.id !== id));
		};

		const newToast = {
			id,
			message,
			variant,
			handleClose,
		};
		const newToastArr = [...toastArr, newToast];

		setToastArr(newToastArr);
	};

	return (
		<ToastContext.Provider value={{ toastArr, addToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
