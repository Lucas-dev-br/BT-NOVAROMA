import React from 'react';

//import images
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import img1 from "../../assets/images/small/img-1.jpg";
import img2 from "../../assets/images/small/img-2.jpg";

//SimpleBar
import SimpleBar from "simplebar-react";
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';

const Chat = () => {
    return (
        <React.Fragment>
            <Col xxl={4} lg={6}>
                <Card className="card-height-100">
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Chat</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown" direction='start'>
                                <DropdownToggle tag="a" className="text-reset" role="button">
                                    <span className="text-muted"><i className="ri-settings-4-line align-middle me-1"></i>Setting <i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                    <DropdownItem><i className="ri-user-2-fill align-bottom text-muted me-2"></i> View Profile</DropdownItem>
                                    <DropdownItem><i className="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive</DropdownItem>
                                    <DropdownItem><i className="ri-mic-off-line align-bottom text-muted me-2"></i> Muted</DropdownItem>
                                    <DropdownItem><i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>

                    <CardBody className="p-0">
                        <div id="users-chat">
                            <SimpleBar className="chat-conversation p-3" id="chat-conversation" style={{ height: "400px" }}>
                                <ul className="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
                                    <li className="chat-list left">
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src={avatar2} alt="" />
                                            </div>
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0 ctext-content">Good morning 😊</p>
                                                    </div>
                                                    <UncontrolledDropdown className="align-self-start message-box-drop">
                                                        <DropdownToggle tag="a" role="button">
                                                            <i className="ri-more-2-fill"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                            <DropdownItem><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                            <DropdownItem><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</DropdownItem>
                                                            <DropdownItem><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                            <DropdownItem className="delete-item"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <div className="conversation-name"><small className="text-muted time">09:07 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="chat-list right">
                                        <div className="conversation-list">
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0 ctext-content">Good morning, How are you? What about our next meeting?</p>
                                                    </div>
                                                    <UncontrolledDropdown className="align-self-start message-box-drop">
                                                        <DropdownToggle tag="a" role="button">
                                                            <i className="ri-more-2-fill"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                            <DropdownItem><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                            <DropdownItem><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</DropdownItem>
                                                            <DropdownItem><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                            <DropdownItem className="delete-item"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <div className="conversation-name"><small className="text-muted time">09:08 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="chat-list left">
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src={avatar2} alt="" />
                                            </div>
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0 ctext-content">Yeah everything is fine. Our next meeting tomorrow at 10.00 AM</p>
                                                    </div>
                                                    <UncontrolledDropdown className="align-self-start message-box-drop">
                                                        <DropdownToggle tag="a" role="button">
                                                            <i className="ri-more-2-fill"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                            <DropdownItem><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                            <DropdownItem><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</DropdownItem>
                                                            <DropdownItem><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                            <DropdownItem className="delete-item"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0 ctext-content">Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.</p>
                                                    </div>
                                                    <UncontrolledDropdown className="align-self-start message-box-drop">
                                                        <DropdownToggle tag="a" role="button">
                                                            <i className="ri-more-2-fill"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                            <DropdownItem><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                            <DropdownItem><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</DropdownItem>
                                                            <DropdownItem><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                            <DropdownItem className="delete-item"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <div className="conversation-name"><small className="text-muted time">09:10 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="chat-list right">
                                        <div className="conversation-list">
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="ctext-wrap-content">
                                                        <p className="mb-0 ctext-content">Wow that's great</p>
                                                    </div>
                                                    <UncontrolledDropdown className="align-self-start message-box-drop">
                                                        <DropdownToggle tag="a" role="button">
                                                            <i className="ri-more-2-fill"></i>
                                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                            <DropdownItem><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                            <DropdownItem><i className="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy</DropdownItem>
                                                            <DropdownItem><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                            <DropdownItem className="delete-item"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </div>
                                                <div className="conversation-name"><small className="text-muted time">09:12 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                            </div>
                                        </div>
                                    </li>


                                    <li className="chat-list left">
                                        <div className="conversation-list">
                                            <div className="chat-avatar">
                                                <img src={avatar2} alt="" />
                                            </div>
                                            <div className="user-chat-content">
                                                <div className="ctext-wrap">
                                                    <div className="message-img mb-0">
                                                        <div className="message-img-list">
                                                            <div>
                                                                <a className="popup-img d-inline-block" href={img1}>
                                                                    <img src={img1} alt="" className="rounded border" />
                                                                </a>
                                                            </div>
                                                            <div className="message-img-link">
                                                                <ul className="list-inline mb-0">
                                                                    <UncontrolledDropdown className="list-inline-item">
                                                                        <DropdownToggle tag="a" className="dropdown-toggle" role="button">
                                                                            <i className="ri-more-fill"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem href={img1} download=""><i className="ri-download-2-line me-2 text-muted align-bottom"></i>Download</DropdownItem>
                                                                            <DropdownItem href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                                            <DropdownItem href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                                            <DropdownItem href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                                            <DropdownItem className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        <div className="message-img-list">
                                                            <div>
                                                                <a className="popup-img d-inline-block" href={img2}>
                                                                    <img src={img2} alt="" className="rounded border" />
                                                                </a>
                                                            </div>
                                                            <div className="message-img-link">
                                                                <ul className="list-inline mb-0">
                                                                    <UncontrolledDropdown className="list-inline-item">
                                                                        <DropdownToggle tag="a" className="dropdown-toggle" role="button">
                                                                            <i className="ri-more-fill"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem href={img1} download=""><i className="ri-download-2-line me-2 text-muted align-bottom"></i>Download</DropdownItem>
                                                                            <DropdownItem href="#"><i className="ri-reply-line me-2 text-muted align-bottom"></i>Reply</DropdownItem>
                                                                            <DropdownItem href="#"><i className="ri-share-line me-2 text-muted align-bottom"></i>Forward</DropdownItem>
                                                                            <DropdownItem href="#"><i className="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark</DropdownItem>
                                                                            <DropdownItem className="delete-item" href="#"><i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete</DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="conversation-name"><small className="text-muted time">09:30 am</small> <span className="text-success check-message-icon"><i className="ri-check-double-line align-bottom"></i></span></div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </SimpleBar>
                        </div>
                        <div className="border-top border-top-dashed">
                            <div className="row g-2 mx-3 mt-2 mb-3">
                                <div className="col">
                                    <div className="position-relative">
                                        <input type="text" className="form-control border-light bg-light" placeholder="Enter Message..." />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-info"><span className="d-none d-sm-inline-block me-2">Send</span> <i className="mdi mdi-send float-end"></i></button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Chat;