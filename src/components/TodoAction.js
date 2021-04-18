import React from "react";

class TodoAction extends React.Component {
	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.state = {
			error: "",
		};
	}

	onFormSubmit(e) {
		e.preventDefault();
		const item = e.target.elements.textItem.value.trim();
		const error = this.props.addItem(item);
		this.setState({
			error: error,
		});

		e.target.elements.textItem.value = "";
	}

	render() {
		return (
			<div className="d-flex add-item justify-content-between">
				{this.state.error && <div className="alert alert-warning">{this.state.error}</div>}
				<form onSubmit={this.onFormSubmit}>
					<input type="text" name="textItem" />
					<button className="btn btn-success btn-sm" type="submit">Add</button>
				</form>
			</div>
		);
	}
}

export default TodoAction;