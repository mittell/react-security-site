import React from 'react';
import { Link } from 'react-router-dom';

import { SiDatabricks } from 'react-icons/si';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import './FooterStyles.css';
import {
	FiMail,
	FiInstagram,
	FiFacebook,
	FiLinkedin,
	FiDribbble,
	FiGithub,
} from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='top'>
					<div className='logo-footer'>
						<Link to='/'>
							<SiDatabricks className='icon' />
						</Link>
						<h2>Secured.</h2>
					</div>

					<ScrollLink
						activeClass='active'
						to='top'
						spy={true}
						smooth={true}
						duration={500}
					>
						<BsFillArrowUpCircleFill className='icon' />
					</ScrollLink>
				</div>
				<div className='col-container'>
					<div className='col'>
						<h3>Navigation</h3>
						<p>Home</p>
						<p>Data</p>
						<p>Cloud</p>
						<p>Contact</p>
					</div>
					<div className='col'>
						<h3>My Account</h3>
						<p>Login</p>
						<p>My Data</p>
						<p>Cloud Security</p>
						<p>Important</p>
						<p>Specialist</p>
					</div>
					<div className='col'>
						<h3>Information</h3>
						<p>Membership</p>
						<p>Data Protocols</p>
						<p>Cloud Protocols</p>
						<p>Security Roles</p>
					</div>
					<div className='col'>
						<h3>Legal</h3>
						<p>Policies</p>
						<p>Terms &#38; Conditions</p>
						<p>Securities</p>
					</div>
					<form>
						<h3>Join Our Team</h3>
						<input type='email' placeholder='Enter your email' />
						<FiMail className='mail-icon' />
						<div className='social-group'>
							<FiInstagram className='social-icon' />
							<FiFacebook className='social-icon' />
							<FiLinkedin className='social-icon' />
							<FiDribbble className='social-icon' />
							<FiGithub className='social-icon' />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Footer;
