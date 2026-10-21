import React from "react";

function useKeyDown({ callback }) {
	React.useEffect(() => {
		document.addEventListener("keydown", callback);

		return () => {
			document.removeEventListener("keydown", callback);
		};
	}, [callback]);
}

export default useKeyDown;
