import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
	return (
		<>
			<ul className="list-group">
				{props.items.map((item, index) => (
					<TodoItem key={index} item={item} deleteItem={props.deleteItem} />
				))}
			</ul>
			{props.items.length > 1 && (
				<button
					className="btn btn-outline-danger btn-sm mt-3 float-right"
					onClick={props.clearItems}
				>
					Clear
				</button>
			)}
		</>
	);
};

export default TodoList;