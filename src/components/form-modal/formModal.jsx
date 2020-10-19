import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './formModal.scss';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { clearCart } from '../../store/actions/actions';
import Toaster from '../toast/toast';

const FormModal = (props) => {
	const { showForm } = props;
	const [toast, setToast] = useState(false);
	const initialValues = {
		name: '',
		email: '',
		phoneNumber: '',
		address: '',
	};
	const validationSchema = Yup.object({
		name: Yup.string()
			.required('Name is required')
			.min(5, 'Minimum 5 letters required')
			.max(45, 'maximum 45 letters only'),
		email: Yup.string().email().required('Email is required'),
		phoneNumber: Yup.number()
			.typeError("That doesn't look like a phone number")
			.positive("Phone Number  can't start with a minus")
			.integer("Phone Number  can't include a decimal point")
			.min(8)
			.required('Phone Number is required'),
		address: Yup.string().required('Address is required'),
	});

	const onSubmit = (values, onSubmitProps) => {
		onSubmitProps.resetForm();
		alert(JSON.stringify(values));
		props.hideForm();
		props.clearCart();
		setToast(true);
		setTimeout(() => {
			setToast(false);
		}, 5000);
	};

	return (
		<div>
			{toast ? <Toaster /> : null}
			<Modal isOpen={showForm} toggle={props.hideForm}>
				<ModalHeader toggle={props.hideForm}>User Information</ModalHeader>
				<ModalBody>
					<Formik
						initialValues={initialValues}
						onSubmit={onSubmit}
						validationSchema={validationSchema}>
						{(formik) => {
							return (
								<Form>
									<div className='form-group'>
										<label>Name</label>
										<Field
											className='form-control'
											type='text'
											id='name'
											name='name'
										/>
										<div style={{ color: 'red' }}>
											<ErrorMessage name='name' />
										</div>
									</div>
									<div className='form-group'>
										<label>Email</label>
										<Field
											className='form-control'
											type='email'
											id='email'
											name='email'
										/>
										<div style={{ color: 'red' }}>
											<ErrorMessage name='email' />
										</div>
									</div>
									<div className='form-group'>
										<label>Phone Number</label>
										<Field
											className='form-control'
											type='number'
											id='phoneNumber'
											name='phoneNumber'
										/>
										<div style={{ color: 'red' }}>
											<ErrorMessage name='phoneNumber' />
										</div>
									</div>
									<div className='form-group'>
										<label>Addreess</label>
										<Field
											className='form-control'
											type='text'
											id='address'
											name='address'
										/>
										<div style={{ color: 'red' }}>
											<ErrorMessage name='address' />
										</div>
									</div>
									<button
										className='btn btn-outline-secondary mt-3'
										type='submit'
										disabled={!formik.isValid || formik.isSubmitting}>
										Submit
									</button>
								</Form>
							);
						}}
					</Formik>
				</ModalBody>
			</Modal>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		clearCart: () => dispatch(clearCart()),
	};
};

export default connect(null, mapDispatchToProps)(FormModal);
