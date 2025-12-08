import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MyContextProvider from './shared/hooks/MyContextProvider';
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from './components/pages/Home/Home';
import Header from './widgets/header/Header';
import './scss/style.scss';
import Footer from './widgets/footer/Footer';


function App() {
	return (
		<ReactLenis root options={{
			lerp: 0.1,
			duration: 1,
			smoothTouch: false, //smooth scroll for touch devices
			smooth: true,
		}
		}>
			<div className="wrapper">
				<MyContextProvider>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route element={<Home />} path='/' />
						</Routes>
						<Footer />
					</BrowserRouter>
				</MyContextProvider>
			</div>
		</ReactLenis>
	);
}

export default App;