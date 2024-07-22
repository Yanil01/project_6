import "./App.css";
import TreeView from "./component";
import menus from "./component/data";

function App() {
  return (
    <>
      <TreeView menus={menus} />
    </>
  );
}

export default App;
