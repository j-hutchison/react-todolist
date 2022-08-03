import "./App.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import ToDoList from "./components/todolist/ToDoList";

import listData from "./data/DummyListData.json";

function App() {
	return (
		<div className="app">
			<Header></Header>
			<MenuBar></MenuBar>
			<ToDoList todoList={listData}></ToDoList>
		</div>
	);
}

export default App;
