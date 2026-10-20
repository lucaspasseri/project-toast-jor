import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = [
	{ id: "variant-notice", value: "notice" },
	{ id: "variant-warning", value: "warning" },
	{ id: "variant-success", value: "success" },
	{ id: "variant-error", value: "error" },
];

function ToastPlayground() {
	const [message, setMessage] = React.useState("");
	const [variant, setVariant] = React.useState("notice");

	const handleButton = () => {
		console.log(message, variant);
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: "baseline" }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<p>
					<strong>Current value:</strong>
					{message || "(empty)"}
				</p>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map(({ id, value }) => {
							return (
								<label htmlFor={id} key={id}>
									<input
										id={id}
										type='radio'
										name='variant'
										value={value}
										checked={variant === value}
										onChange={event => {
											setVariant(event.target.value);
										}}
									/>
									{value[0].toUpperCase() + value.substring(1)}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={handleButton}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
