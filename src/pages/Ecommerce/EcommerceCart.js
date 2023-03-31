import React, { useState } from "react";
import { shoppingCart } from "../../common/data/ecommerce";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { Link } from "react-router-dom";

import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Row,
  CardHeader,
  UncontrolledAlert,
} from "reactstrap";

const EcommerceCart = () => {
  const [productList, setproductList] = useState(shoppingCart);

  function removeCartItem(id) {
    var filtered = productList.filter(function (item) {
      return item.id !== id;
    });

    setproductList(filtered);
  }

  function countUP(id, prev_data_attr) {
    setproductList(
      productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr + 1 } : p
      )
    );
  }

  function countDown(id, prev_data_attr) {
    setproductList(
      productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr - 1 } : p
      )
    );
  }
  document.title="Shopping Cart | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Shopping Cart" pageTitle="Ecommerce" />

          <Row className="mb-3">
            <Col xl={8}>
              <Row className="align-items-center gy-3 mb-3">
                <div className="col-sm">
                  <div>
                    <h5 className="fs-14 mb-0">Your Cart (03 items)</h5>
                  </div>
                </div>
                <div className="col-sm-auto">
                  <Link
                    to="apps-ecommerce-products"
                    className="link-primary text-decoration-underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </Row>
              {productList.map((cartItem, key) => (
                <React.Fragment key={cartItem.id}>
                  <Card className="product">
                    <CardBody>
                      <Row className="gy-3">
                        <div className="col-sm-auto">
                          <div className="avatar-lg bg-light rounded p-1">
                            <img
                              src={cartItem.img}
                              alt=""
                              className="img-fluid d-block"
                            />
                          </div>
                        </div>
                        <div className="col-sm">
                          <h5 className="fs-14 text-truncate">
                            <Link
                              to="/ecommerce-product-detail"
                              className="text-dark"
                            >
                              {cartItem.name}
                            </Link>
                          </h5>
                          <ul className="list-inline text-muted">
                            <li className="list-inline-item">
                              Color :{" "}
                              <span className="fw-medium">
                                {cartItem.color}
                              </span>
                            </li>
                            <li className="list-inline-item">
                              Size :{" "}
                              <span className="fw-medium">{cartItem.size}</span>
                            </li>
                          </ul>

                          <div className="input-step">
                            <button
                              type="button"
                              className="minus"
                              onClick={() => {
                                countDown(cartItem.id, cartItem.data_attr);
                              }}
                            >
                              –
                            </button>
                            <Input
                              type="text"
                              className="product-quantity"
                              value={cartItem.data_attr}
                              name="demo_vertical"
                              readOnly
                            />
                            <button
                              type="button"
                              className="plus"
                              onClick={() => {
                                countUP(cartItem.id, cartItem.data_attr);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-sm-auto">
                          <div className="text-lg-end">
                            <p className="text-muted mb-1">Item Price:</p>
                            <h5 className="fs-14">
                              $
                              <span id="ticket_price" className="product-price">
                                {cartItem.price}
                              </span>
                            </h5>
                          </div>
                        </div>
                      </Row>
                    </CardBody>

                    <div className="card-footer">
                      <div className="row align-items-center gy-3">
                        <div className="col-sm">
                          <div className="d-flex flex-wrap my-n1">
                            <div>
                              <Link
                                to="#"
                                className="d-block text-body p-1 px-2"
                                onClick={() => removeCartItem(cartItem.id)}
                              >
                                <i className="ri-delete-bin-fill text-muted align-bottom me-1"></i>{" "}
                                Remove
                              </Link>
                            </div>
                            <div>
                              <Link
                                to="#"
                                className="d-block text-body p-1 px-2"
                              >
                                <i className="ri-star-fill text-muted align-bottom me-1"></i>{" "}
                                Add Wishlist
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-auto">
                          <div className="d-flex align-items-center gap-2 text-muted">
                            <div>Total :</div>
                            <h5 className="fs-14 mb-0">
                              $
                              <span className="product-line-price">
                                {" "}
                                {cartItem.total}
                              </span>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </React.Fragment>
              ))}

              <div className="text-end mb-4">
                <Link
                  to="apps-ecommerce-checkout"
                  className="btn btn-success btn-label right ms-auto"
                >
                  <i className="ri-arrow-right-line label-icon align-bottom fs-16 ms-2"></i>{" "}
                  Checkout
                </Link>
              </div>
            </Col>

            <Col xl={4}>
              <div className="sticky-side-div">
                <Card>
                  <CardHeader className="border-bottom-dashed">
                    <h5 className="card-title mb-0">Order Summary</h5>
                  </CardHeader>
                  <CardHeader className="bg-soft-light border-bottom-dashed">
                    <div className="text-center">
                      <h6 className="mb-2">
                        Have a <span className="fw-semibold">promo</span> code ?
                      </h6>
                    </div>
                    <div className="hstack gap-3 px-3 mx-n3">
                      <input
                        className="form-control me-auto"
                        type="text"
                        placeholder="Enter coupon code"
                        aria-label="Add Promo Code here..."
                      />
                      <button type="button" className="btn btn-success w-xs">
                        Apply
                      </button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-2">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <tbody>
                          <tr>
                            <td>Sub Total :</td>
                            <td className="text-end" id="cart-subtotal">
                              $ 359.96
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Discount{" "}
                              <span className="text-muted">(VELZON15)</span> :{" "}
                            </td>
                            <td className="text-end" id="cart-discount">
                              - $ 53.99
                            </td>
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            <td className="text-end" id="cart-shipping">
                              $ 65.00
                            </td>
                          </tr>
                          <tr>
                            <td>Estimated Tax (12.5%) : </td>
                            <td className="text-end" id="cart-tax">
                              $ 44.99
                            </td>
                          </tr>
                          <tr className="table-active">
                            <th>Total (USD) :</th>
                            <td className="text-end">
                              <span className="fw-semibold" id="cart-total">
                                $415.96
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>

                <UncontrolledAlert color="danger" className="border-dashed">
                  <div className="d-flex align-items-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/nkmsrxys.json"
                      trigger="loop"
                      colors="primary:#121331,secondary:#ed5e5e"
                      style={{ width: "80px", height: "80px" }}
                    ></lord-icon>
                    <div className="ms-2">
                      <h5 className="fs-14 text-danger fw-semibold">
                        {" "}
                        Buying for a loved one?
                      </h5>
                      <p className="text-black mb-1">
                        Gift wrap and personalised message on card, <br />
                        Only for <span className="fw-semibold">$9.99</span> USD
                      </p>
                      <button
                        type="button"
                        className="btn ps-0 btn-sm btn-link text-danger text-uppercase"
                      >
                        Add Gift Wrap
                      </button>
                    </div>
                  </div>
                </UncontrolledAlert>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceCart;
