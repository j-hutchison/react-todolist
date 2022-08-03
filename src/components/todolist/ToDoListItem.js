import React from "react";
import classes from "./ToDoListItem.module.css";

const ToDoListItem = (props) => {
	return (
		<li
			className={
				props.complete
					? `${classes["todolist-item--active"]} ${classes["todolist-item"]}`
					: classes["todolist-item"]
			}
		>
			{props.name}
		</li>
	);
};

export default ToDoListItem;
