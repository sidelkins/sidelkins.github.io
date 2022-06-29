import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects";

function App() {

  return (
    <Layout></Layout>
  );
}

export default App;