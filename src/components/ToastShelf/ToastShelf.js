import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastArr }) {
	return (
		<>
			{toastArr.length > 0 && (
				<ol className={styles.wrapper}>
					{toastArr.map(toast => {
						return (
							<li key={toast.id} className={styles.toastWrapper}>
								<Toast toast={toast} />
							</li>
						);
					})}
				</ol>
			)}
		</>
	);
}

export default ToastShelf;
