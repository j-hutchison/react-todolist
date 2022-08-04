import React, { useRef } from "react";
import classes from "./MenuBar.module.css";
import FormData from "../data/FormData.json";

const MenuBar = (props) => {
	const listItemInput = useRef();

	const onAddBtnClick = () => {
		console.log(listItemInput.current.value);
		props.onClick(listItemInput.current.value);
		listItemInput.current.value = "";
	};

	const onFilterChange = (e) => {
		const [selectedOption] = e.target.selectedOptions;
		console.log(selectedOption.value);

		if (selectedOption.value === "Incomplete") {
			props.setListFilter(() => false);
		} else {
			props.setListFilter(() => true);
		}
	};

	return (
		<div className={classes["menubar"]}>
			<div className={classes["menubar-input-container"]}>
				<input
					ref={listItemInput}
					type="text"
					name=""
					id=""
					className={classes["menubar-input"]}
				/>
				<div className={classes["menubar-input-add"]} onClick={onAddBtnClick}>
					<i className="fa-solid fa-plus"></i>
				</div>
			</div>
			<div className={classes["menubar-filter-container"]}>
				<select
					className={classes["menubar-filter-selection"]}
					onChange={onFilterChange}
				>
					<option className="menubar-filter-option" data-boolean-value="true">
						All
					</option>
					<option className="menubar-filter-option" data-boolean-value="false">
						Incomplete
					</option>
				</select>
			</div>
		</div>
	);
};

export default MenuBar;
