import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";
import TodoAction from "./TodoAction";

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.clearItems = this.clearItems.bind(this);
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.state = {
			items: [],
		};
	}

	componentDidMount() {
		const json = localStorage.getItem("items");
		const items = JSON.parse(json);

		if (items) {
			this.setState({
				items: items,
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.items.length !== this.state.items.length) {
			const json = JSON.stringify(this.state.items);
			localStorage.setItem("items", json);
		}
	}

	clearItems() {
		this.setState({
			items: [],
		});
	}

	deleteItem(item) {
		this.setState((prevState) => {
			const arr = prevState.items.filter((i) => {
				return item != i;
			});

			return {
				items: arr,
			};
		});
	}

	addItem(item) {
		if (this.state.items.includes(item) == true) {
			return "The todo you want to add already exists.";
		} else if (!item) {
			return "Todo is empty.";
		} else {
			this.setState((prevState) => {
				return { items: [...prevState.items, item] };
			});
		}
	}

	render() {
		const app = {
			title: "Todo App",
			description: "Add todo list type text input.",
		};
		return (
			<div className="container my-5">
				<div className="card">
					<div className="card-header">
						<Header title={app.title} description={app.description} />
					</div>
					<div className="card-body">
						<TodoList
							items={this.state.items}
							clearItems={this.clearItems}
							deleteItem={this.deleteItem}
						/>
					</div>
					<div className="card-footer">
						<TodoAction addItem={this.addItem} />
					</div>
				</div>
			</div>
		);
	}
}

export default TodoApp;