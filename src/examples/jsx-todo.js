const root = document.getElementById("root");

const app = {
  title: "Todo App",
  desc: "Add todo list type text input.",
  items: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();

  let item = event.target.elements.textItem.value;
  if (item) {
    app.items.push(item);
    event.target.elements.textItem.value = "";
    renderApp();
  }
};

const clearItems = () => {
  app.items = [];
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.desc}</p>
      <p>{app.items.length}</p>
      <button onClick={clearItems}>Clear</button>
      <ul>
        {app.items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="textItem" />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );

  ReactDOM.render(template, root);
};

renderApp();
