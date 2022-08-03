import React from "react";
import classes from "./MenuBar.module.css";
import FormData from "../data/FormData.json";

const MenuBar = (props) => {
	return (
		<div className={classes["menubar"]}>
			<div className={classes["menubar-input-container"]}>
				<input type="text" name="" id="" className={classes["menubar-input"]} />
				<div className={classes["menubar-input-add"]}>
					<i class="fa-regular fa-plus"></i>
				</div>
			</div>
			<div className={classes["menubar-filter-container"]}>
				<select className={classes["menubar-filter-selection"]}>
					<option value="menubar-filter-option">All</option>
					<option value="menubar-filter-option">Incomplete</option>
				</select>
			</div>
		</div>
	);
};

export default MenuBar;
