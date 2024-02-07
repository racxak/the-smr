import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Auth from "./components/pages/Auth/Auth";
import SignUp from "./components/pages/Auth/SignUp";
import "./App.css";

function App() {
	return (
		<>
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/projects" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/cart" element={<About />}></Route>
				<Route path="/auth" element={<Auth />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</>
	);
}

export default App;
