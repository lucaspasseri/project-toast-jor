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

	React.useEffect(() => {
		const handleEscapeKey = e => {
			const key = e.code;
			if (key !== "Escape") return;

			setToastArr([]);
		};

		document.addEventListener("keydown", handleEscapeKey);

		return () => {
			document.removeEventListener("keydown", handleEscapeKey);
		};
	}, []);

	return (
		<ToastContext.Provider value={{ toastArr, addToast }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
