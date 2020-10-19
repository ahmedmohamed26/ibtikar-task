import React from 'react'
import { Toast, ToastBody} from 'reactstrap';
const Toaster = (props) => {
    return (
        <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastBody>
            We recieved your order 
          </ToastBody>
        </Toast>
      </div>
    )
}


export default Toaster;
