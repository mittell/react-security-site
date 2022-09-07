import React from 'react';
import Cloud from './components/Cloud/Cloud';
import Data from './components/Data/Data';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Data />
			<Cloud />
		</>
	);
};

export default App;
