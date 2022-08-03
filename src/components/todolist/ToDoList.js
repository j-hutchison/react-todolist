import React from "react";
import classes from "./ToDoList.module.css";
import ToDoListItem from "./ToDoListItem";

const ToDoList = (props) => {
	return (
		<ul className={classes["todolist"]}>
			{props.todoList.map((el, index) => {
				return (
					<ToDoListItem name={el.name} complete={el.complete}></ToDoListItem>
				);
			})}
		</ul>
	);
};

export default ToDoList;
