import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledCollapse,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
} from "reactstrap";
import classnames from "classnames";

// RangeSlider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";
import { Rating, Published, Price } from "./EcommerceProductCol";
//Import data
import { productsData } from "../../../common/data";

//Import actions
import { getProducts as onGetProducts, deleteProducts, resetEcomFlag } from "../../../store/ecommerce/action";
import { isEmpty } from "lodash";
import Select from "react-select";
import MsgToast from "../../../Components/Common/MsgToast";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleOptions = [
  { value: 'Watches', label: 'Watches' },
  { value: 'Headset', label: 'Headset' },
  { value: 'Sweatshirt', label: 'Sweatshirt' },
  { value: '20% off', label: '20% off' },
  { value: '4 star', label: '4 star' },
];

const EcommerceProducts = (props) => {
  const dispatch = useDispatch();

  const { products, isProductDelete, isProductDeleteFail } = useSelector((state) => ({
    products: state.Ecommerce.products,
    isProductDelete: state.Ecommerce.isProductDelete,
    isProductDeleteFail: state.Ecommerce.isProductDeleteFail,
  }));

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetEcomFlag());
    }, 3000);
  }, [dispatch, isProductDelete, isProductDeleteFail]);


  const [productList, setProductList] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [selectedMulti, setselectedMulti] = useState(null);
  const [product, setProduct] = useState(null);

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  useEffect(() => {
    if (products && !products.length) {
      dispatch(onGetProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!isEmpty(products)) setProductList(products);
  }, [products]);

  const toggleTab = (tab, type) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      let filteredProducts = products;
      if (type !== "all") {
        filteredProducts = products.filter((product) => product.status === type);
      }
      setProductList(filteredProducts);
    }
  };

  const onUpdate = (value) => {
    setProductList(
      productsData.filter(
        (product) => product.price >= value[0] && product.price <= value[1],
      )
    );
  };

  const [cate, setCate] = useState("all");

  const categories = (category) => {
    let filteredProducts = products;
    if (category !== "all") {
      filteredProducts = products.filter((product) => product.category === category);
    }
    setProductList(filteredProducts);
    setCate(category);
  };

  const [ratingvalues, setRatingvalues] = useState([]);
  /*
  on change rating checkbox method
  */
  const onChangeRating = value => {
    setProductList(productsData.filter(product => product.rating >= value));

    var modifiedRating = [...ratingvalues];
    modifiedRating.push(value);
    setRatingvalues(modifiedRating);
  };

  const onUncheckMark = (value) => {
    var modifiedRating = [...ratingvalues];
    const modifiedData = (modifiedRating || []).filter(x => x !== value);
    /*
    find min values
    */
    var filteredProducts = productsData;
    if (modifiedData && modifiedData.length && value !== 1) {
      var minValue = Math.min(...modifiedData);
      if (minValue && minValue !== Infinity) {
        filteredProducts = productsData.filter(
          product => product.rating >= minValue
        );
        setRatingvalues(modifiedData);
      }
    } else {
      filteredProducts = productsData;
    }
    setProductList(filteredProducts);
  };

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (product) => {
    setProduct(product);
    setDeleteModal(true);
  };

  const handleDeleteOrder = () => {
    if (product) {
      dispatch(deleteProducts(product._id));
      setDeleteModal(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" />;
        },
      },
      {
        Header: "Product",
        Cell: (product) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="avatar-sm bg-light rounded p-1">
                  <img
                    src={process.env.REACT_APP_API_URL + "/images/products/" + product.row.original.image}
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-1">
                  <Link
                    to="/apps-ecommerce-product-details"
                    className="text-dark"
                  >
                    {" "}
                    {product.row.original.name}
                  </Link>
                </h5>
                <p className="text-muted mb-0">
                  Category :{" "}
                  <span className="fw-medium">
                    {" "}
                    {product.row.original.category}
                  </span>
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Stock",
        accessor: "stock",
        filterable: false,
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
        Header: "Orders",
        accessor: "orders",
        filterable: false,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: false,
        Cell: (cellProps) => {
          return <Rating {...cellProps} />;
        },
      },
      {
        Header: "Published",
        accessor: "publishedDate",
        filterable: false,
        Cell: (cellProps) => {
          return <Published {...cellProps} />;
        },
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle
                href="#"
                className="btn-soft-secondary btn-sm"
                tag="button"
              >
                <i className="ri-more-fill" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="apps-ecommerce-product-details">
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href="apps-ecommerce-add-product">
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const productData = cellProps.row.original;
                    onClickDelete(productData);
                  }}
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
  document.title = "Product | Velzon - React Admin & Dashboard Template";

  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <Container fluid>
        <BreadCrumb title="Products" pageTitle="Ecommerce" />

        <Row>
          <Col xl={3} lg={4}>
            <Card>
              <CardHeader >
                <div className="d-flex mb-3">
                  <div className="flex-grow-1">
                    <h5 className="fs-16">Filters</h5>
                  </div>
                  <div className="flex-shrink-0">
                    <Link to="#" className="text-decoration-underline">
                      Clear All
                    </Link>
                  </div>
                </div>

                <div className="filter-choices-input">
                  <Select
                    value={selectedMulti}
                    isMulti={true}
                    onChange={() => {
                      handleMulti();
                    }}
                    options={SingleOptions}
                  />
                </div>
              </CardHeader>

              <div className="accordion accordion-flush">
                <div className="card-body border-bottom">
                  <div>
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-2">
                      Products
                    </p>
                    <ul className="list-unstyled mb-0 filter-list">
                      <li>
                        <Link to="#" className={cate === "Kitchen Storage & Containers" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("Kitchen Storage & Containers")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Grocery</h5>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "Clothes" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("Clothes")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Fashion</h5>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                            <span className="badge bg-light text-muted">5</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "Watches" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("Watches")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Watches</h5>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "electronics" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("electronics")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Electronics</h5>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                            <span className="badge bg-light text-muted">5</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "Furniture" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("Furniture")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Furniture</h5>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                            <span className="badge bg-light text-muted">6</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "Bike Accessories" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("Bike Accessories")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Automotive Accessories</h5>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "appliances" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("appliances")}>
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Appliances</h5>
                          </div>
                          <div className="flex-shrink-0 ms-2">
                            <span className="badge bg-light text-muted">7</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className={cate === "Bags, Wallets and Luggage" ? "active d-flex py-1 align-items-center" : "d-flex py-1 align-items-center"} onClick={() => categories("Bags, Wallets and Luggage")} >
                          <div className="flex-grow-1">
                            <h5 className="fs-13 mb-0 listname">Kids</h5>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-5">
                    Price
                  </p>

                  <Nouislider
                    range={{ min: 0, max: 600 }}
                    tooltips={true}
                    start={[100, 500]}
                    connect
                    onSlide={onUpdate}
                  />
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent shadow-none"
                      type="button"
                      id="flush-headingBrands"
                    >
                      <span className="text-muted text-uppercase fs-12 fw-medium">
                        Brands
                      </span>{" "}
                      <span className="badge bg-success rounded-pill align-middle ms-1">
                        2
                      </span>
                    </button>
                  </h2>
                  <UncontrolledCollapse
                    toggler="#flush-headingBrands"
                  >
                    <div
                      id="flush-collapseBrands"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingBrands"
                    >
                      <div className="accordion-body text-body pt-0">
                        <div className="search-box search-box-sm">
                          <input
                            type="text"
                            className="form-control bg-light border-0"
                            placeholder="Search Brands..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                        <div className="d-flex flex-column gap-2 mt-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio5"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio5"
                            >
                              Boat
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio4"
                            >
                              OnePlus
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio3"
                            >
                              Realme
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio2"
                            >
                              Sony
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productBrandRadio1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productBrandRadio1"
                            >
                              JBL
                            </label>
                          </div>

                          <div>
                            <button
                              type="button"
                              className="btn btn-link text-decoration-none text-uppercase fw-medium p-0"
                            >
                              1,235 More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent shadow-none collapsed"
                      type="button"
                      id="flush-headingDiscount"
                    >
                      <span className="text-muted text-uppercase fs-12 fw-medium">
                        Discount
                      </span>{" "}
                      <span className="badge bg-success rounded-pill align-middle ms-1">
                        1
                      </span>
                    </button>
                  </h2>
                  <UncontrolledCollapse toggler="#flush-headingDiscount">
                    <div
                      id="flush-collapseDiscount"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body text-body pt-1">
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productdiscountRadio6"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productdiscountRadio6"
                            >
                              50% or more
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productdiscountRadio5"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productdiscountRadio5"
                            >
                              40% or more
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productdiscountRadio4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productdiscountRadio4"
                            >
                              30% or more
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productdiscountRadio3"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productdiscountRadio3"
                            >
                              20% or more
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productdiscountRadio2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productdiscountRadio2"
                            >
                              10% or more
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productdiscountRadio1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productdiscountRadio1"
                            >
                              Less than 10%
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button bg-transparent shadow-none collapsed"
                      type="button"
                      id="flush-headingRating"
                    >
                      <span className="text-muted text-uppercase fs-12 fw-medium">
                        Rating
                      </span>{" "}
                      <span className="badge bg-success rounded-pill align-middle ms-1">
                        1
                      </span>
                    </button>
                  </h2>

                  <UncontrolledCollapse toggler="#flush-headingRating">
                    <div
                      id="flush-collapseRating"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingRating"
                    >
                      <div className="accordion-body text-body">
                        <div className="d-flex flex-column gap-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio4"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(4);
                                } else {
                                  onUncheckMark(4);
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio4"
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              4 & Above
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio3"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(3);
                                } else {
                                  onUncheckMark(3);
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio3"
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              3 & Above
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio2"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(2);
                                } else {
                                  onUncheckMark(2);
                                }
                              }}
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              2 & Above
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="productratingRadio1"
                              onChange={e => {
                                if (e.target.checked) {
                                  onChangeRating(1);
                                } else {
                                  onUncheckMark(1);
                                }
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="productratingRadio1"
                            >
                              <span className="text-muted">
                                <i className="mdi mdi-star text-warning"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                                <i className="mdi mdi-star"></i>
                              </span>{" "}
                              1
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </UncontrolledCollapse>
                </div>
              </div>
            </Card>
          </Col>

          <div className="col-xl-9 col-lg-8">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/apps-ecommerce-add-product"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Product
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Products..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <Nav
                        className="nav-tabs-custom card-header-tabs border-bottom-0"
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames(
                              { active: activeTab === "1" },
                              "fw-semibold"
                            )}
                            onClick={() => {
                              toggleTab("1", "all");
                            }}
                            href="#"
                          >
                            All{" "}
                            <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                              12
                            </span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames(
                              { active: activeTab === "2" },
                              "fw-semibold"
                            )}
                            onClick={() => {
                              toggleTab("2", "published");
                            }}
                            href="#"
                          >
                            Published{" "}
                            <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                              5
                            </span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames(
                              { active: activeTab === "3" },
                              "fw-semibold"
                            )}
                            onClick={() => {
                              toggleTab("3", "draft");
                            }}
                            href="#"
                          >
                            Draft
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                    <div className="col-auto">
                      <div id="selection-element">
                        <div className="my-n1 d-flex align-items-center text-muted">
                          Select{" "}
                          <div
                            id="select-content"
                            className="text-body fw-semibold px-1"
                          ></div>{" "}
                          Result{" "}
                          <button
                            type="button"
                            className="btn btn-link link-danger p-0 ms-3"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        {productList && productList.length > 0 ? (
                          <TableContainer
                            columns={columns}
                            data={(productList || [])}
                            isGlobalFilter={false}
                            isAddUserList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 align-middle table-borderless"
                            theadClass="table-light text-muted"
                          />
                        ) : (
                          <div className="py-4 text-center">
                            <div>
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
                                trigger="loop"
                                colors="primary:#405189,secondary:#0ab39c"
                                style={{ width: "72px", height: "72px" }}
                              ></lord-icon>
                            </div>

                            <div className="mt-4">
                              <h5>Sorry! No Result Found</h5>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabPane>
                  </TabContent>
                  {isProductDelete ? <MsgToast msg="Product Deleted Successfully" color="success" icon="ri-checkbox-circle-line" /> : null}
                  {isProductDeleteFail ? <MsgToast msg="Product Deleted Failed" color="danger" icon="ri-error-warning-line" /> : null}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default EcommerceProducts;
