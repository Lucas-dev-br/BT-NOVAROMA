import React, { useEffect, useState } from "react";

import {
  CardBody,
  Row,
  Col,
  Card,
  Container,
  Form,
  Input,
  Label,
  Table,
} from "reactstrap";

import { Link } from "react-router-dom";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import Select from "react-select";

import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

const InvoiceCreate = () => {
  const [ispaymentDetails, setispaymentDetails] = useState(null);
  const [isStatus, setisStatus] = useState(null);
  const [isCurrency, setisCurrency] = useState("$");

  function handleispaymentDetails(ispaymentDetails) {
    setispaymentDetails(ispaymentDetails);
  }

  function handleisCurrency(isCurrency) {
    setisCurrency(isCurrency);
  }

  const paymentdetails = [
    {
      options: [
        { label: "Payment Method", value: "Payment Method" },
        { label: "Mastercard", value: "Mastercard" },
        { label: "Credit Card", value: "Credit Card" },
        { label: "Visa", value: "Visa" },
        { label: "Paypal", value: "Paypal" },
      ],
    },
  ];

  const allstatus = [
    {
      options: [
        { label: "Select Payment Status", value: "Select Payment Status" },
        { label: "Paid", value: "Paid" },
        { label: "Unpaid", value: "Unpaid" },
        { label: "Refund", value: "Refund" },
      ],
    },
  ];

  function handleisStatus(isStatus) {
    setisStatus(isStatus);
  }

  const allcurrency = [
    {
      options: [
        { label: "$", value: "($)" },
        { label: "£", value: "(£)" },
        { label: "₹", value: "(₹)" },
        { label: "€", value: "(€)" },
      ],
    },
  ];

  const [count, setCount] = useState(0);
  const [rate, setRate] = useState(0);
  const [tax, setTax] = useState(0);
  const [dis, setDis] = useState(0);
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    let tax = (0.125 * rate * count);
    let dis = (0.15 * rate * count);

    if ((rate && count) && isNaN !== 0) {
      setCharge(65);
    } else {
      setCharge(0);

    }
    setTax(tax);
    setDis(dis);
  }, [rate, count]);


  document.title = "Create Invoice | Velzon - React Admin & Dashboard Template";

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Invoice" pageTitle="Invoices" />
        <Row className="justify-content-center">
          <Col xxl={9} >
            <Card>
              <Form className="needs-validation" id="invoice_form">
                <CardBody className="border-bottom border-bottom-dashed p-4">
                  <Row>
                    <Col lg={4}>
                      <div className="profile-user mx-auto  mb-3">
                        <Input
                          id="profile-img-file-input"
                          type="file"
                          className="profile-img-file-input"
                        />
                        <Label for="profile-img-file-input" className="d-block">
                          <span
                            className="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded"
                            style={{ height: "60px", width: "256px" }}
                          >
                            <img
                              src={logoDark}
                              className="card-logo card-logo-dark user-profile-image img-fluid"
                              alt="logo dark"
                            />
                            <img
                              src={logoLight}
                              className="card-logo card-logo-light user-profile-image img-fluid"
                              alt="logo light"
                            />
                          </span>
                        </Label>
                      </div>
                      <div>
                        <div>
                          <Label for="companyAddress">Address</Label>
                        </div>
                        <div className="mb-2">
                          <Input
                            type="textarea"
                            className="form-control bg-light border-0"
                            id="companyAddress"
                            rows="3"
                            placeholder="Company Address"
                          ></Input>
                          <div className="invalid-feedback">
                            Please enter a address
                          </div>
                        </div>
                        <div>
                          <Input
                            type="text"
                            className="form-control bg-light border-0"
                            id="companyaddpostalcode"
                            minLength="5"
                            maxLength="6"
                            placeholder="Enter Postal Code"
                          />
                          <div className="invalid-feedback">
                            The US zip code must contain 5 digits, Ex. 45678
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="ms-auto">
                      <div className="mb-2">
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          id="registrationNumber"
                          maxLength="12"
                          placeholder="Legal Registration No"
                        />
                        <div className="invalid-feedback">
                          Please enter a registration no, Ex., 012345678912
                        </div>
                      </div>
                      <div className="mb-2">
                        <Input
                          type="email"
                          className="form-control bg-light border-0"
                          id="companyEmail"
                          placeholder="Email Address"
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email, Ex., example@gamil.com
                        </div>
                      </div>
                      <div className="mb-2">
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          id="companyWebsite"
                          placeholder="Website"
                        />
                        <div className="invalid-feedback">
                          Please enter a website, Ex., www.example.com
                        </div>
                      </div>
                      <div>
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          data-plugin="cleave-phone"
                          id="compnayContactno"
                          placeholder="Contact No"
                        />
                        <div className="invalid-feedback">
                          Please enter a contact number
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody className="p-4">
                  <Row className="g-3">
                    <Col lg={3} sm={6}>
                      <Label for="invoicenoInput">Invoice No</Label>
                      <Input
                        type="text"
                        className="form-control bg-light border-0"
                        id="invoicenoInput"
                        placeholder="Invoice No"
                        defaultValue="#VL25000355"
                      />
                    </Col>
                    <Col lg={3} sm={6}>
                      <div>
                        <Label for="date-field">Date</Label>
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          id="date-field"
                          data-provider="flatpickr"
                          data-time="true"
                          placeholder="Select Date-time"
                        />
                      </div>
                    </Col>
                    <Col lg={3} sm={6}>
                      <Label for="choices-payment-status">Payment Status</Label>
                      <div className="input-light">
                        <Select
                          className="bg-light border-0"
                          value={isStatus}
                          onChange={() => {
                            handleisStatus();
                          }}
                          options={allstatus}
                          id="choices-payment-status"
                        ></Select>
                      </div>
                    </Col>
                    <Col lg={3} sm={6}>
                      <div>
                        <Label for="totalamountInput">Total Amount</Label>
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          id="totalamountInput"
                          placeholder="$0.00"
                          readOnly
                          value={"$" + Math.round(rate * count + tax + charge - dis)}
                        />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody className="p-4 border-top border-top-dashed">
                  <Row>
                    <Col lg={4} sm={6}>
                      <div>
                        <Label
                          for="billingName"
                          className="text-muted text-uppercase fw-semibold"
                        >
                          Billing Address
                        </Label>
                      </div>
                      <div className="mb-2">
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          id="billingName"
                          placeholder="Full Name"
                        />
                        <div className="invalid-feedback">
                          Please enter a full name
                        </div>
                      </div>
                      <div className="mb-2">
                        <Input
                          type="textarea"
                          className="form-control bg-light border-0"
                          id="billingAddress"
                          rows="3"
                          placeholder="Address"
                          defaultValue=""
                        ></Input>
                        <div className="invalid-feedback">
                          Please enter a address
                        </div>
                      </div>
                      <div className="mb-2">
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          data-plugin="cleave-phone"
                          id="billingPhoneno"
                          placeholder="(123)456-7890"
                        />
                        <div className="invalid-feedback">
                          Please enter a phone number
                        </div>
                      </div>
                      <div className="mb-3">
                        <Input
                          type="text"
                          className="form-control bg-light border-0"
                          id="billingTaxno"
                          placeholder="Tax Number"
                        />
                        <div className="invalid-feedback">
                          Please enter a tax number
                        </div>
                      </div>
                      <div className="form-check">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="same"
                          name="same"
                        />
                        <Label className="form-check-label" for="same">
                          Will your Billing and Shipping address same?
                        </Label>
                      </div>
                    </Col>
                    <Col sm={6} className="ms-auto">
                      <Row>
                        <Col lg={8}>
                          <div>
                            <Label
                              for="shippingName"
                              className="text-muted text-uppercase fw-semibold"
                            >
                              Shipping Address
                            </Label>
                          </div>
                          <div className="mb-2">
                            <Input
                              type="text"
                              className="form-control bg-light border-0"
                              id="shippingName"
                              placeholder="Full Name"
                            />
                            <div className="invalid-feedback">
                              Please enter a full name
                            </div>
                          </div>
                          <div className="mb-2">
                            <Input
                              type="textarea"
                              className="form-control bg-light border-0"
                              id="shippingAddress"
                              rows="3"
                              placeholder="Address"
                              defaultValue=""
                            ></Input>
                            <div className="invalid-feedback">
                              Please enter a address
                            </div>
                          </div>
                          <div className="mb-2">
                            <Input
                              type="text"
                              className="form-control bg-light border-0"
                              data-plugin="cleave-phone"
                              id="shippingPhoneno"
                              placeholder="(123)456-7890"
                            />
                            <div className="invalid-feedback">
                              Please enter a phone number
                            </div>
                          </div>
                          <div>
                            <Input
                              type="text"
                              className="form-control bg-light border-0"
                              id="shippingTaxno"
                              placeholder="Tax Number"
                            />
                            <div className="invalid-feedback">
                              Please enter a tax number
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
                <CardBody className="p-4">
                  <div className="table-responsive">
                    <Table className="invoice-table table-borderless table-nowrap mb-0">
                      <thead className="align-middle">
                        <tr className="table-active">
                          <th scope="col" style={{ width: "50px" }}>
                            #
                          </th>
                          <th scope="col">Product Details</th>
                          <th scope="col" style={{ width: "120px" }}>
                            <div className="d-flex currency-select input-light align-items-center">
                              Rate
                              <Select
                                defaultValue={isCurrency}
                                onChange={() => {
                                  handleisCurrency();
                                }}
                                options={allcurrency}
                                id="choices-payment-currency"
                                className="form-selectborder-0 bg-light"
                              ></Select>

                            </div>
                          </th>
                          <th scope="col" style={{ width: "120px" }}>
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="text-end"
                            style={{ width: "150px" }}
                          >
                            Amount
                          </th>
                          <th
                            scope="col"
                            className="text-end"
                            style={{ width: "105px" }}
                          ></th>
                        </tr>
                      </thead>
                      <tbody id="newlink">
                        <tr id="1" className="product">
                          <th scope="row" className="product-id">
                            1
                          </th>
                          <td className="text-start">
                            <div className="mb-2">
                              <Input
                                type="text"
                                className="form-control bg-light border-0"
                                id="productName-1"
                                placeholder="Product Name"
                              />
                              <div className="invalid-feedback">
                                Please enter a product name
                              </div>
                            </div>
                            <Input
                              type="textarea"
                              className="form-control bg-light border-0"
                              id="productDetails-1"
                              rows="2"
                              placeholder="Product Details"
                              defaultValue=""
                            ></Input>
                          </td>
                          <td>
                            <Input
                              type="number"
                              className="form-control product-price bg-light border-0"
                              placeholder="0.00"
                              id="productRate-1" step="0.01"
                              // defaultValue={}
                              // readOnly
                              onChange={(e) => {
                                setRate(e.target.value);
                              }}
                            />
                            <div className="invalid-feedback">
                              Please enter a rate
                            </div>
                          </td>
                          <td>


                            <div className="input-step">
                              <button type="button" className="minus" onClick={() => setCount(count - 1)}>
                                –
                              </button>
                              <Input
                                type="number"
                                className="product-quantity"
                                id="product-qty-1"
                                // defaultValue="0"
                                value={count}
                                readOnly
                              />
                              <button type="button" className="plus" onClick={() => setCount(count + 1)}>
                                +
                              </button>
                            </div>


                          </td>
                          <td className="text-end">
                            <div>
                              <Input
                                type="text"
                                className="form-control bg-light border-0 product-line-price"
                                id="productPrice-1"
                                placeholder="$0.00"
                                value={"$" + rate * count}
                                readOnly
                              />
                            </div>
                          </td>
                          <td className="product-removal">
                            <Link to="#" className="btn btn-success">
                              Delete
                            </Link>
                          </td>
                        </tr>

                        <tr id="newForm" style={{ display: "none" }}><td className="d-none" colSpan="5"><p>Add New Form</p></td></tr>
                        <tr>
                          <td colSpan="5">
                            <Link
                              to="#"
                              className="btn btn-soft-secondary fw-medium"
                              id="add-item"
                            >
                              <i className="ri-add-fill me-1 align-bottom"></i>{" "}
                              Add Item
                            </Link>
                          </td>
                        </tr>
                        <tr className="border-top border-top-dashed mt-2">
                          <td colSpan="3"></td>
                          <td colSpan="2" className="p-0">
                            <Table className="table-borderless table-sm table-nowrap align-middle mb-0">
                              <tbody>
                                <tr>
                                  <th scope="row">Sub Total</th>
                                  <td style={{ width: "150px" }}>
                                    <Input
                                      type="text"
                                      className="form-control bg-light border-0"
                                      id="cart-subtotal"
                                      placeholder="$0.00"
                                      readOnly
                                      value={"$" + rate * count}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Estimated Tax (12.5%)</th>
                                  <td>
                                    <Input
                                      type="text"
                                      className="form-control bg-light border-0"
                                      id="cart-tax"
                                      placeholder="$0.00"
                                      readOnly
                                      value={"$" + tax}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">
                                    Discount{" "}
                                    <small className="text-muted">
                                      (VELZON15)
                                    </small>
                                  </th>
                                  <td>
                                    <Input
                                      type="text"
                                      className="form-control bg-light border-0"
                                      id="cart-discount"
                                      placeholder="$0.00"
                                      readOnly
                                      value={"$" + dis}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <th scope="row">Shipping Charge</th>
                                  <td>
                                    <Input
                                      type="text"
                                      className="form-control bg-light border-0"
                                      id="cart-shipping"
                                      placeholder="$0.00"
                                      readOnly
                                      value={"$" + charge}
                                    />
                                  </td>
                                </tr>
                                <tr className="border-top border-top-dashed">
                                  <th scope="row">Total Amount</th>
                                  <td>
                                    <Input
                                      type="text"
                                      className="form-control bg-light border-0"
                                      id="cart-total"
                                      placeholder="$0.00"
                                      readOnly
                                      value={"$" + Math.round(rate * count + tax + charge - dis)}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <Row className="mt-3">
                    <Col lg={4}>
                      <div className="mb-2">
                        <Label
                          for="choices-payment-type"
                          className="form-label text-muted text-uppercase fw-semibold"
                        >
                          Payment Details
                        </Label>
                        <div className="input-light">
                          <Select
                            value={ispaymentDetails}
                            onChange={() => {
                              handleispaymentDetails();
                            }}
                            options={paymentdetails}
                            name="choices-single-default"
                            id="idStatus"
                            className="bg-light border-0"
                          ></Select>
                        </div>
                      </div>
                      <div className="mb-2">
                        <Input
                          className="form-control bg-light border-0"
                          type="text"
                          id="cardholderName"
                          placeholder="Card Holder Name"
                        />
                      </div>
                      <div className="mb-2">
                        <Input
                          className="form-control bg-light border-0"
                          type="text"
                          id="cardNumber"
                          placeholder="xxxx xxxx xxxx xxxx"
                        />
                      </div>
                      <div>
                        <Input
                          className="form-control  bg-light border-0"
                          type="text"
                          id="amountTotalPay"
                          placeholder="$0.00"
                          readOnly
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className="mt-4">
                    <Label
                      for="exampleFormControlTextarea1"
                      className="form-label text-muted text-uppercase fw-semibold"
                    >
                      NOTES
                    </Label>
                    <Input
                      type="textarea"
                      className="form-control alert alert-info"
                      id="exampleFormControlTextarea1"
                      placeholder="Notes"
                      rows="2"
                      defaultValue="All accounts are to be paid within 7 days from receipt of
                      invoice. To be paid by cheque or credit card or direct
                      payment online. If account is not paid within 7 days the
                      credits details supplied as confirmation of work
                      undertaken will be charged the agreed quoted fee noted
                      above."
                    />
                  </div>
                  <div className="hstack gap-2 justify-content-end d-print-none mt-4">
                    <button type="submit" className="btn btn-success">
                      <i className="ri-printer-line align-bottom me-1"></i> Save
                    </button>
                    <Link to="#" className="btn btn-primary">
                      <i className="ri-download-2-line align-bottom me-1"></i>{" "}
                      Download Invoice
                    </Link>
                    <Link to="#" className="btn btn-danger">
                      <i className="ri-send-plane-fill align-bottom me-1"></i>{" "}
                      Send Invoice
                    </Link>
                  </div>
                </CardBody>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InvoiceCreate;
