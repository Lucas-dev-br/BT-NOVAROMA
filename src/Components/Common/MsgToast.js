import React from 'react';
import { Alert } from 'reactstrap';

const MsgToast = (props) => {
    return (
        <React.Fragment>
            <div className='position-fixed alert-msg-show'>
                <Alert className='mt-2 alert-solid' color={props.color} >
                    <i className={'align-bottom me-1 ' + props.icon}></i> {props.msg}
                </Alert>
            </div>
        </React.Fragment>
    );
};

export default MsgToast;
