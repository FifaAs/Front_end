import { Dashboard } from "./components/Dashboard";
import { ParentComponent } from "./components/ParentComponent";
import "./App.css";

function App() {
  console.log("🔴 App render");
  return (
    <main className="app">
      <Dashboard />
      <hr className="app__divider" />
      <ParentComponent />
    </main>
  );
}

export default App;