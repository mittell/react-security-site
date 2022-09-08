import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import RecoveryPage from './pages/RecoveryPage';
import CloudPage from './pages/CloudPage';
import ContactPage from './pages/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/recovery' element={<RecoveryPage />} />
			<Route path='/cloud' element={<CloudPage />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='*' element={<Navigate to='/' replace={true} />} />
		</Routes>
	</BrowserRouter>
);
