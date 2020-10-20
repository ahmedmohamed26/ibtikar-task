import React from 'react';
import { Toast, ToastBody, ToastHeader, Spinner } from 'reactstrap';
const Toaster = (props) => {
	const { formInfo } = props;
	return (
		<div className='p-3 my-2 rounded bg-docs-transparent-grid'>
			<Toast>
				<ToastHeader icon={<Spinner size='sm' />}>
					We recieved your order
				</ToastHeader>
				<ToastBody>
					<ul className='list-unstyled'>
						<li className='d-flex'>
							<h6 className='font-weight-bold mb-0 mr-2'>Name:</h6>
							<span>{formInfo.name}</span>
						</li>
						<li className='d-flex'>
							<h6 className='font-weight-bold mb-0 mr-2'>Email:</h6>
							<span>{formInfo.email}</span>
						</li>
						<li className='d-flex'>
							<h6 className='font-weight-bold mb-0 mr-2'>Phone:</h6>
							<span>{formInfo.phoneNumber}</span>
						</li>
						<li className='d-flex'>
							<h6 className='font-weight-bold mb-0 mr-2'>Address:</h6>
							<span>{formInfo.address}</span>
						</li>
					</ul>
				</ToastBody>
			</Toast>
		</div>
	);
};

export default Toaster;
