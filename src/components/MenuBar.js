import React, { useRef } from "react";
import classes from "./MenuBar.module.css";
import FormData from "../data/FormData.json";

const MenuBar = (props) => {
	const listItemInput = useRef();

	const onAddBtnClick = (e) => {
		e.preventDefault();
		console.log(listItemInput.current.value);
		props.onClick(listItemInput.current.value);
		listItemInput.current.value = "";
	};

	const onFilterChange = (e) => {
		const [selectedOption] = e.target.selectedOptions;
		console.log(selectedOption.value);

		if (selectedOption.value === "Incomplete") {
			props.setListFilter(() => "incomplete");
		} else if (selectedOption.value === "Complete") {
			props.setListFilter(() => "complete");
		} else {
			props.setListFilter(() => "all");
		}
	};

	return (
		<form className={classes["menubar"]} onSubmit={onAddBtnClick}>
			<div className={classes["menubar-input-container"]}>
				<input
					ref={listItemInput}
					type="text"
					className={classes["menubar-input"]}
				/>
				<button
					className={classes["menubar-input-add"]}
					onClick={onAddBtnClick}
				>
					<i className="fa-solid fa-plus"></i>
				</button>
			</div>
			<div className={classes["menubar-filter-container"]}>
				<select
					className={classes["menubar-filter-selection"]}
					onChange={onFilterChange}
				>
					<option className="menubar-filter-option">All</option>
					<option className="menubar-filter-option">Complete</option>
					<option className="menubar-filter-option">Incomplete</option>
				</select>
			</div>
		</form>
	);
};

export default MenuBar;
