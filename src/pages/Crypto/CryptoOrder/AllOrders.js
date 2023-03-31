import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import TableContainer from '../../../Components/Common/TableContainer';
import Flatpickr from "react-flatpickr";
import {
    Type,
    Quantity,
    OrderValue,
    AvgPrice,
    Price,
    Status
} from './OrderCol';

const AllOrders = ({ orderList }) => {
    const columns = useMemo(
        () => [
            {
                Header: "Date",
                Cell: (order) => (
                    <>
                        {order.row.original.date}{" "}
                        <small className="text-muted">{order.row.original.time}</small>
                    </>
                ),
            },
            {
                Header: "Name",
                Cell: (order) => (
                    <>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img src={order.row.original.img} alt="" className="avatar-xxs" />
                            </div>
                            <Link to="#" className="currency_name flex-grow-1 ms-2 text-body">{order.row.original.coinName}</Link>
                        </div>
                    </>
                ),
            },
            {
                Header: "Type",
                accessor: "type",
                filterable: false,
                Cell: (cellProps) => {
                    return <Type {...cellProps} />;
                },
            },
            {
                Header: "Quantity",
                accessor: "quantity",
                filterable: false,
                Cell: (cellProps) => {
                    return <Quantity {...cellProps} />;
                },
            },
            {
                Header: "Order Value",
                accessor: "orderValue",
                filterable: false,
                Cell: (cellProps) => {
                    return <OrderValue {...cellProps} />;
                },
            },
            {
                Header: "Avg Price",
                accessor: "avgPrice",
                filterable: false,
                Cell: (cellProps) => {
                    return <AvgPrice {...cellProps} />;
                },
            },
            {
                Header: "Price",
                accessor: "price",
                filterable: false,
                Cell: (cellProps) => {
                    return <Price {...cellProps} />;
                },
            },
            {
                Header: "Status",
                accessor: "status",
                filterable: false,
                Cell: (cellProps) => {
                    return <Status {...cellProps} />;
                },
            },
        ],
        []
    );
    return (
        <React.Fragment>
            <Col lg={12}>
                <Card>
                    <CardHeader className="d-flex align-items-center border-0">
                        <h5 className="card-title mb-0 flex-grow-1">All Orders</h5>
                        <div className="flex-shrink-0">
                            <div className="flax-shrink-0 hstack gap-2">
                                <button className="btn btn-primary">Today's Orders</button>
                                <button className="btn btn-soft-info">Past Orders</button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="border border-dashed border-end-0 border-start-0">
                        <Row className="g-2">
                            <Col xl={4} md={6}>
                                <div className="search-box">
                                    <input type="text" className="form-control search" placeholder="Search to orders..." />
                                    <i className="ri-search-line search-icon"></i>
                                </div>
                            </Col>
                            <Col xl={3} md={6}>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><i className="ri-calendar-2-line"></i></span>
                                    <Flatpickr
                                        placeholder="Select date"
                                        className="form-control"
                                        options={{
                                            mode: "range",
                                            dateFormat: "d M, Y"
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col xl={2} md={4}>
                                <select className="form-control" data-choices data-choices-search-false name="choices-single-default"
                                    id="choices-single-default">
                                    <option defaultValue="">Select Type</option>
                                    <option value="Buy">Sell</option>
                                    <option value="Sell">Buy</option>
                                </select>
                            </Col>
                            <Col xl={2} md={4}>
                                <select className="form-control" data-choices data-choices-search-false name="choices-single-default2"
                                    id="choices-single-default2">
                                    <option defaultValue="">Select Status</option>
                                    <option value="Successful">Successful</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </Col>
                            <Col xl={1} md={4}>
                                <button className="btn btn-success w-100">Filters</button>
                            </Col>
                        </Row>
                    </CardBody>
                    <CardBody>
                        <TableContainer
                            columns={columns}
                            data={(orderList || [])}
                            isGlobalFilter={false}
                            isAddUserList={false}
                            customPageSize={8}
                            className="custom-header-css"
                            divClass="table-responsive table-card"
                            tableClass="align-middle table-nowrap"
                            theadClass="table-light text-muted"
                        />
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default AllOrders;