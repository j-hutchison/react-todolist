import React from "react";
import classes from "./ToDoList.module.css";
import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
	return (
		<ul className={classes["todolist"]}>
			{props.todoList
				.filter((el) => {
					if (!props.filter) {
						if (!el.complete) return el;
					}
					return el;
				})
				.map((el, index) => {
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
