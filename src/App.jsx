import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import MyContextProvider from './shared/hooks/MyContextProvider';
import { ReactLenis } from "@studio-freight/react-lenis";
import Home from './components/pages/Home/Home';
import Header from './widgets/header/Header';
import './scss/style.scss';
import Footer from './widgets/footer/Footer';
import About from './components/pages/about/About';
import DepartmentPage from './components/pages/DepartmentPage';
import AllDepartmentsPage from './components/pages/AllDepartmentsPage';
import AllNewsPage from './components/pages/AllNewsPage';
import NewsPage from './components/pages/NewsPage';
import Contacts from './components/pages/Contacts/Contacts';
import PriceListPage from './components/pages/PriceList/PriceListPage';
import ScrollToTop from './components/ScrollToTop';


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
						<ScrollToTop />
						<Header />
						<Routes>
							<Route element={<Home />} path='/' />
							<Route element={<About />} path='/about' />
							<Route element={<AllDepartmentsPage />} path='/departments' />
							<Route element={<AllNewsPage />} path='/news' />
							<Route element={<Contacts />} path='/contacts' />
							<Route element={<PriceListPage />} path='/price-list' />
							<Route element={<DepartmentPage />} path='/departments/:slug' />
							<Route element={<NewsPage />} path='/news/:slug' />
						</Routes>
						<Footer />
					</BrowserRouter>
				</MyContextProvider>
			</div>
		</ReactLenis>
	);
}

export default App;