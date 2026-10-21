import React from "react";
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ toast, dismiss }) {
	const { variant, message } = toast;

	const variantStyle = styles?.[variant] ?? "";
	const Icon = ICONS_BY_VARIANT[variant];

	return (
		<div className={`${styles.toast} ${variantStyle}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>
					{variant.charAt(0).toUpperCase() + variant.slice(1) + " - "}
				</VisuallyHidden>
				{message}
			</p>
			<button
				className={styles.closeButton}
				onClick={dismiss}
				aria-label='Dismiss message'
				aria-live='off'
			>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
