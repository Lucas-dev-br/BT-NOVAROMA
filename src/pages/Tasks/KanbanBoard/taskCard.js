import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, DropdownItem, DropdownMenu, DropdownToggle, Modal, UncontrolledDropdown } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import { map } from "lodash";

const CardTaskBox = props => {

    const [modal_delete, setmodal_delete] = useState(false);
    function tog_delete() {
        setmodal_delete(!modal_delete);
    }

    const { data } = props;
    return (
        <React.Fragment>
            <div className="tasks-board mb-3" id="kanbanboard">
                <div className="tasks-list">

                    <SimpleBar className="tasks-wrapper px-3 mx-n3">
                        <div id="unassigned-task" className="tasks">

                            <Card className="tasks-box" >
                                <CardBody>
                                    <div className="d-flex mb-2">
                                        <h6 className="fs-14 mb-0 flex-grow-1 text-truncate">{data.isTaskIdHeader ? <Link to="#" className="text-muted fw-medium fs-14 flex-grow-1">{data.taskId}</Link> : <Link to="/apps-tasks-details" className="text-body">{data.title}</Link>}</h6>
                                        <UncontrolledDropdown direction='start'>
                                            <DropdownToggle tag="a" id="dropdownMenuLink1" role="button">
                                                <i className="ri-more-fill" />
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem tag="a" to="/apps-tasks-details"><i className="ri-eye-fill align-bottom me-2 text-muted" />View</DropdownItem>
                                                <DropdownItem><i className="ri-edit-2-line align-bottom me-2 text-muted" />Edit</DropdownItem>
                                                <DropdownItem onClick={() => { tog_delete(); }} to="#deleteRecordModal"><i className="ri-delete-bin-5-line align-bottom me-2 text-muted" />Delete</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </div>

                                    {data.isTaskIdHeader && <h6 className="fs-15 text-truncate flex-grow-1"><Link to="/apps-tasks-details" className="text-body">{data.title}</Link></h6>}

                                    {data.bgImage ? <div className="tasks-img rounded" style={{ background: `url(${data.bgImage})` }}></div> :
                                        <p className="text-muted">{data.desc}</p>}


                                    {data.isTaskId && <div className="mb-3">
                                        <div className="d-flex mb-1">
                                            <div className="flex-grow-1">
                                                <h6 className="text-muted mb-0"><span className={"text-" + data.progressBarText}>{data.progressBar}</span> of 100%</h6>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-muted">{data.date}</span>
                                            </div>
                                        </div>
                                        <div className="progress rounded-3 progress-sm">
                                            <div className={"progress-bar bg-" + data.progressBarColor} role="progressbar" style={{ width: data.progressBar }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>}
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1">
                                            {map(data.tags, (data, key) => (<span className="badge badge-soft-primary me-1" key={key}>{data.tag}</span>))}
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="avatar-group">
                                                {map(data.members, (data, key) => (<Link to="#" className="avatar-group-item" key={key}>
                                                    <img src={data.img} alt="" className="rounded-circle avatar-xxs" />
                                                </Link>))}
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                                <div className="card-footer border-top-dashed">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            {data.isTaskId ? <h6 className="text-muted mb-0">{data.taskId}</h6> :
                                                <span className="text-muted"><i className="ri-time-line align-bottom"></i> {data.date} </span>}
                                        </div>
                                        <div className="flex-shrink-0">
                                            <ul className="link-inline mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-muted"><i className="ri-eye-line align-bottom" /> {data.view}</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-muted"><i className="ri-question-answer-line align-bottom" /> {data.message}</Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-muted"><i className="ri-attachment-2 align-bottom" /> {data.file}</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {data.isProgessBarFooter && <div className="progress progress-sm">
                                    <div className={"progress-bar bg-" + data.progressBarColor} role="progressbar" style={{ width: data.progressBar }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>}
                            </Card>
                        </div>
                    </SimpleBar>
                    {/* <div className="my-3">
                        <Button color="info" className="btn-soft-info w-100" onClick={() => { tog_newTask(); }}>Add More</Button>
                    </div> */}
                </div>
            </div>

            {/* Delete Record Modal */}
            <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} centered modalClassName="zoomIn" id="deleteRecordModal">
                <div className="modal-header">
                    <Button type="button" onClick={() => { setmodal_delete(false); }} className="btn-close" aria-label="Close" >
                    </Button>
                </div>
                <div className="modal-body">
                    <div className="mt-2 text-center">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
                            colors="primary:#f7b84b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
                        <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                            <h4>Are you sure ?</h4>
                            <p className="text-muted mx-4 mb-0">Are you sure you want to remove this tasks ?</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                        <Button color="light" className="w-sm" onClick={() => setmodal_delete(false)}>Close</Button>
                        <Button color="danger" className="w-sm" id="delete-record">Yes, Delete It!</Button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default CardTaskBox;
