import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import ToDoList from "./components/todolist/ToDoList";

import data from "./data/DummyListData.json";

function App() {
	const [listData, setListData] = useState(data);
	const [listFilter, setListFilter] = useState();

	const handleAddBtnClick = (name) => {
		setListData(() => {
			const newListItem = {
				name: name,
				complete: false,
				key: Math.floor(Math.random() * 1000),
			};
			return [...listData, newListItem];
		});
	};

	const handleFilterChange = (value) => {
		setListFilter(() => {
			return value;
		});
	};

	const handleDeleteBtnClick = (index) => {
		setListData(() => {
			console.log(index);
			let newData = [...listData];
			newData.splice(index, 1);
			return newData;
		});
	};

	const handleCompletedBtnClick = (index, value) => {
		setListData(() => {
			console.log(index, value);
			let newData = [...listData];
			newData[index] = { name: listData[index].name, complete: value };
			return newData;
		});
	};

	return (
		<div className="app">
			<Header></Header>
			<MenuBar
				onFilter={handleFilterChange}
				onClick={handleAddBtnClick}
			></MenuBar>
			<ToDoList
				todoList={listData}
				filter={listFilter}
				onClickComplete={handleCompletedBtnClick}
				onClickDelete={handleDeleteBtnClick}
			></ToDoList>
		</div>
	);
}

export default App;
