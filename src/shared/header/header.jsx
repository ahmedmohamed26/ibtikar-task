import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import './header.scss';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavbarText,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

import CartIcon from '../../components/cartIcon/cartIcon';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownProfileOpen, setDropdownProfileOpen] = useState(false);
	// const [dropdownCartOpen, setDropdownCartOpen] = useState(false);
	const toggleProfileDropdown = () => setDropdownProfileOpen((prevState) => !prevState);
	// const toggleCartDropdown = () => setDropdownCartOpen((prevState) => !prevState);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<header>
			<div className='container'>
				<Navbar className='navbar' light expand='md'>
					<NavbarBrand href='/products'>Store</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='mr-auto' navbar>
							<NavItem className='nav-item'>
								<Link className='nav-link' to='/products'>
									products
								</Link>
							</NavItem>
							<NavItem className='nav-item'>
								<Link className='nav-link' to='/cart'>
									cart
								</Link>
							</NavItem>
						</Nav>
						<NavbarText>
							<CartIcon />
						</NavbarText>
						<NavbarText>
							<Dropdown
								className='dropdown'
								isOpen={dropdownProfileOpen}
								toggle={toggleProfileDropdown}>
								<DropdownToggle tag='span' className='nav-link'>
									<img
										src='/images/10.jpg'
										className='card-img'
										alt='profile image'
									/>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem className='d-flex align-items-center dropdown-item'>
										<i className='fa fa-pencil'></i>
										<h6 className='mb-0'>View / Edit Profile</h6>
									</DropdownItem>
									<DropdownItem className='d-flex align-items-center dropdown-item'>
										<i className='fa fa-circle-o-notch'></i>
										<h6 className='mb-0'>sign out</h6>
									</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</NavbarText>
					</Collapse>
				</Navbar>
			</div>
		</header>
	);
};

export default Header;
