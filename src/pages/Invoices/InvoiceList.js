import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  CardBody,
  Row,
  Col,
  Card,
  Container,
  CardHeader,
  Form,
  Input,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import * as moment from "moment";
import CountUp from "react-countup";
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import TableContainer from "../../Components/Common/TableContainer";
import DeleteModal from "../../Components/Common/DeleteModal";

//Import Icons
import FeatherIcon from "feather-icons-react";
import Select from "react-select";

import { invoiceWidgets } from "../../common/data/invoiceList";
//Import actions
import {
  getInvoices as onGetInvoices,
  deleteInvoice as onDeleteInvoice,
  resetInvoiceFlag
} from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import Loader from "../../Components/Common/Loader";
import MsgToast from "../../Components/Common/MsgToast";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InvoiceList = () => {
  const dispatch = useDispatch();
  const { invoices, isInvoiceSuccess, error, isInvoiceDelete, isInvoiceDeleteFail } = useSelector((state) => ({
    invoices: state.Invoice.invoices,
    isInvoiceSuccess: state.Invoice.isInvoiceSuccess,
    error: state.Invoice.error,
    isInvoiceDelete: state.Invoice.isInvoiceDelete,
    isInvoiceDeleteFail: state.Invoice.isInvoiceDeleteFail,
  }));

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetInvoiceFlag());
    }, 3000);
  }, [dispatch, isInvoiceSuccess, error, isInvoiceDelete, isInvoiceDeleteFail]);

  //delete invoice
  const [deleteModal, setDeleteModal] = useState(false);
  const [isStatus, setisStatus] = useState(null);


  function handleisStatus(isStatus) {
    setisStatus(isStatus);
  }

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    if (invoices && !invoices.length) {
      dispatch(onGetInvoices());
    }
  }, [dispatch, invoices]);

  useEffect(() => {
    setInvoice(invoices);
  }, [invoices]);

  // Delete Data
  const onClickDelete = (invoice) => {
    setInvoice(invoice);
    setDeleteModal(true);
  };

  const handleDeleteInvoice = () => {
    if (invoice) {
      dispatch(onDeleteInvoice(invoice._id));
      setDeleteModal(false);
    }
  };


  const allstatus = [
    {
      options: [
        { label: "Status", value: "Status" },
        { label: "All", value: "All" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "Paid", value: "Paid" },
        { label: "Cancel", value: "Cancel" },
        { label: "Refund", value: "Refund" },
      ],
    },
  ];

  // const onClickDelete = () => {
  //   setDeleteModal(true);
  // };

  const handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  const handleValidTime = (time) => {
    const time1 = new Date(time);
    const getHour = time1.getUTCHours();
    const getMin = time1.getUTCMinutes();
    const getTime = `${getHour}:${getMin}`;
    var meridiem = "";
    if (getHour >= 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    const updateTime = moment(getTime, 'hh:mm').format('hh:mm') + " " + meridiem;
    return updateTime;
  };
  
  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" />;
        },
      },
      {
        Header: "ID",
        accessor: "invoiceId",
        filterable: false,
        Cell: (cell) => {
          return <Link to="/apps-invoices-details" className="fw-medium link-primary">{cell.value}</Link>;
        },
      },
      {
        Header: "Customer",
        Cell: (invoice) => (
          <>
            <div className="d-flex align-items-center">
              {invoice.row.original.img ? <img
                src={process.env.REACT_APP_API_URL + "/images/users/" + invoice.row.original.img}
                alt=""
                className="avatar-xs rounded-circle me-2"
              /> :
                <div className="flex-shrink-0 avatar-xs me-2">
                  <div className="avatar-title bg-soft-success text-success rounded-circle fs-13">
                    {invoice.row.original.name.charAt(0) + invoice.row.original.name.split(" ").slice(-1).toString().charAt(0)}
                  </div>
                </div>}
              {invoice.row.original.name}
            </div>
          </>
        ),
      },
      {
        Header: "EMAIL",
        accessor: "email",
        filterable: false,
      },
      {
        Header: "COUNTRY",
        accessor: "country",
        filterable: false,
      },
      {
        Header: "DATE",
        Cell: (invoice) => (
          <>
            {handleValidDate(invoice.row.original.date)},{" "}
            <small className="text-muted">{handleValidTime(invoice.row.original.date)}</small>
          </>
        ),
      },
      {
        Header: "AMOUNT",
        accessor: "amount",
        filterable: false,
      },
      {
        Header: "PAYMENT STATUS",
        accessor: "status",
        Cell: (cell) => {
          switch (cell.value) {
            case "Paid":
              return <span className="badge text-uppercase badge-soft-success"> {cell.value} </span>;
            case "Unpaid":
              return <span className="badge text-uppercase badge-soft-success"> {cell.value} </span>;
            case "Cancel":
              return <span className="badge text-uppercase badge-soft-danger"> {cell.value} </span>;
            default:
              return <span className="badge text-uppercase badge-soft-info"> {cell.value} </span>;
          }
        }
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown >
              <DropdownToggle
                href="#"
                className="btn-soft-secondary btn-sm dropdown"
                tag="button"
              >
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="/apps-invoices-details">
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href="/apps-invoices-create">
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem href="/#">
                  <i className="ri-download-2-line align-bottom me-2 text-muted"></i>{" "}
                  Download
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem
                  href="#"
                  onClick={() => { const invoiceData = cellProps.row.original; onClickDelete(invoiceData); }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );

  document.title="Invoice List | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onDeleteClick={() => handleDeleteInvoice()}
          onCloseClick={() => setDeleteModal(false)}
        />
        <Container fluid>
          <BreadCrumb title="Invoice List" pageTitle="Invoices" />
          <Row>
            {invoiceWidgets.map((invoicewidget, key) => (
              <React.Fragment key={key}>
                <Col xl={3} md={6}>
                  <Card className="card-animate">
                    <CardBody>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <p className="text-uppercase fw-medium text-muted mb-0">
                            {invoicewidget.label}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <h5
                            className={
                              "fs-14 mb-0 text-" + invoicewidget.percentageClass
                            }
                          >
                            <i className="ri-arrow-right-up-line fs-13 align-middle"></i>{" "}
                            {invoicewidget.percentage}
                          </h5>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-between mt-4">
                        <div>
                          <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                            <CountUp
                              start={0}
                              prefix={invoicewidget.prefix}
                              suffix={invoicewidget.suffix}
                              decimals="2"
                              end={invoicewidget.counter}
                              duration={4}
                              className="counter-value"
                            />
                          </h4>
                          <span className="badge bg-warning me-1">
                            {invoicewidget.badge}
                          </span>{" "}
                          <span className="text-muted">
                            {" "}
                            {invoicewidget.caption}
                          </span>
                        </div>
                        <div className="avatar-sm flex-shrink-0">
                          <span className="avatar-title bg-light rounded fs-3">
                            <FeatherIcon
                              icon={invoicewidget.feaIcon}
                              className="text-success icon-dual-success"
                            />
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </React.Fragment>
            ))}
          </Row>

          <Row>
            <Col lg={12}>
              <Card id="invoiceList">
                <CardHeader className="border-0">
                  <div className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">Invoices</h5>
                    <div className="flex-shrink-0">
                      <button className="btn btn-primary me-1"
                      // onClick="deleteMultiple()"
                      ><i className="ri-delete-bin-2-line"></i></button>
                      <Link
                        to="apps-invoices-create"
                        className="btn btn-danger"
                      >
                        <i className="ri-add-line align-bottom me-1"></i> Create
                        Invoice
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="bg-soft-light border border-dashed border-start-0 border-end-0">
                  <Form>
                    <Row className="g-3">
                      <Col sm={12} xxl={5} >
                        <div className="search-box">
                          <Input
                            type="text"
                            className="form-control search bg-light border-light"
                            placeholder="Search for customer, email, country, status or something..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>

                      <Col sm={4} xxl={3}>
                        <Flatpickr
                          className="form-control bg-light border-light"
                          id="datepicker-publish-input"
                          placeholder="Select a date"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </Col>

                      <Col sm={4} xxl={3}>
                        <div className="input-light">
                          <Select
                            value={isStatus}
                            onChange={() => {
                              handleisStatus();
                            }}
                            options={allstatus}
                            name="choices-single-default"
                            id="idStatus"
                          ></Select>
                        </div>
                      </Col>

                      <Col sm={4} xxl={1}>
                        <Button color="primary" className="w-100">
                          <i className="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                          Filters
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardBody>
                  <div>
                  {isInvoiceSuccess && invoices.length ? (
                      <TableContainer
                      columns={columns}
                      data={(invoices || [])}
                      isGlobalFilter={false}
                      isAddUserList={false}
                      customPageSize={10}
                      className="custom-header-css"
                      theadClass="text-muted text-uppercase"
                    />
                    ) : (<Loader error={error} />)
                    }
                    {isInvoiceDelete ? <MsgToast msg="Invoice Deleted Successfully" color="success" icon="ri-checkbox-circle-line" /> : null}
                    {isInvoiceDeleteFail ? <MsgToast msg="Invoice Deleted Failed" color="danger" icon="ri-error-warning-line" /> : null}
                    <ToastContainer limit={1} closeButton={false} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default InvoiceList;