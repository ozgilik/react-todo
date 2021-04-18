import React from "react";

const TodoItem = (props) => {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-center">
			{props.item}
			<button
				className="btn btn-danger rounded-circle remove-button"
				onClick={() => {
					props.deleteItem(props.item);
				}}
			>
				x
			</button>
		</li>
	);
};

export default TodoItem;
