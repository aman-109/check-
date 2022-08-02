import "./App.css";
import styles from "./Custom.module.css";
import Posts from "./Posts/posts";

console.log(styles);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Posts />
        </div>
      </header>
    </div>
  );
}

export default App;
