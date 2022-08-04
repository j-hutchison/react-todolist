import React, { useEffect, useState } from "react";
import classes from "./ToDoListItem.module.css";

const ToDoListItem = (props) => {
	const [isDeleted, setIsDeleted] = useState(false);

	const handleCompletedButtonClick = () => {
		const newCompletedValue = props.complete ? false : true;
		props.onClickComplete(props.index, newCompletedValue);
	};

	const handleDeleteButtonClick = () => {
		setIsDeleted(() => true);
		setTimeout(() => {
			props.onClickDelete(props.index);
		}, 1000);
	};

	return (
		<li
			className={
				!isDeleted
					? `${classes["todolist-item"]}`
					: `${classes["todolist-item"]} ${classes["todolist-item-deleted"]}`
			}
		>
			<p
				className={
					props.complete
						? `${classes["todolist-item--active"]} ${classes["todolist-item-text"]}`
						: classes["todolist-item-text"]
				}
			>
				{props.name}
			</p>
			<div className={classes["todolist-item-buttons"]}>
				<button
					className={`${classes["todolist-item-green"]} ${classes["todolist-item-btn"]}`}
					onClick={handleCompletedButtonClick}
				>
					<i className="fa-solid fa-check"></i>
				</button>
				<button
					className={`${classes["todolist-item-red"]} ${classes["todolist-item-btn"]}`}
					onClick={handleDeleteButtonClick}
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</li>
	);
};

export default ToDoListItem;
