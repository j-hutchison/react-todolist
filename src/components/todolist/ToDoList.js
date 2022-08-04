import React from "react";
import classes from "./ToDoList.module.css";
import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
	const displayItem = (item) => {
		console.log(props.filter, item.complete);
		if (props.filter === "complete") {
			return item.complete ? true : false;
		} else if (props.filter === "incomplete") {
			return !item.complete ? true : false;
		}

		return true;
	};

	return (
		<ul className={classes["todolist"]}>
			{props.todoList.filter(displayItem).map((el, index) => {
				return (
					<ToDoListItem
						key={el.key}
						name={el.name}
						complete={el.complete}
						index={index}
						onClickComplete={props.onClickComplete}
						onClickDelete={props.onClickDelete}
					></ToDoListItem>
				);
			})}
		</ul>
	);
};

export default ToDoList;
