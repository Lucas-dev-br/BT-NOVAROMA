import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Input,
  Label,
} from "reactstrap";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const EcommerceAddProduct = (props) => {
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  const [selectedFiles, setselectedFiles] = useState([]);
  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedStatus, setselectedStatus] = useState(null);
  const [selectedVisibility, setselectedVisibility] = useState(null);


  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleSelectStatus(selectedStatus) {
    setselectedStatus(selectedStatus);
  }

  function handleSelectVisibility(selectedVisibility) {
    setselectedVisibility(selectedVisibility);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const productCategory = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Appliances", value: "Appliances" },
        { label: "Fashion", value: "Fashion" },
        { label: "Electronics", value: "Electronics" },
        { label: "Grocery", value: "Grocery" },
        { label: "Home & Furniture", value: "Home_Furniture" },
        { label: "Kids", value: "Kids" },
        { label: "Mobiles", value: "Mobiles" },
      ],
    },
  ];

  const productStatus = [
    {
      options: [
        { label: "Draft", value: "Draft" },
        { label: "Published", value: "Published" },
        { label: "Scheduled", value: "Scheduled" },
      ],
    },
  ];

  const productVisibility = [
    {
      options: [
        { label: "Hidden", value: "Hidden" },
        { label: "Public", value: "Public" },
      ],
    },
  ];
  document.title="Create Product | Velzon - React Admin & Dashboard Template";

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Create Product" pageTitle="Ecommerce" />

        <Row>
          <Col lg={8}>
            <form>
              <Card>
                <CardBody>
                  <div className="mb-3">
                    <Label className="form-label" htmlFor="product-title-input">
                      Product Title
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="product-title-input"
                      placeholder="Enter product title"
                    />
                  </div>
                  <div>
                    <Label>Product Description</Label>

                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>
                      Tommy Hilfiger men striped pink sweatshirt. Crafted with
                      cotton. Material composition is 100% organic cotton.
                      This is one of the world’s leading designer lifestyle
                      brands and is internationally recognized for celebrating
                      the essence of classic American cool style, featuring
                      preppy with a twist designs.
                    </p>
                    <ul>
                      <li>Full Sleeve</li>
                      <li>Cotton</li>
                      <li>All Sizes available</li>
                      <li>4 Different Color</li>
                    </ul>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                    />
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Product Gallery</h5>
                </CardHeader>
                <CardBody>
                  <div className="mb-4">
                    <h5 className="fs-13 mb-1">Product Image</h5>
                    <p className="text-muted">Add Product main Image.</p>
                    <input
                      className="form-control"
                      id="product-image-input"
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                    />
                  </div>
                  <div>
                    <h5 className="fs-13 mb-1">Product Gallery</h5>
                    <p className="text-muted">Add Product Gallery Images.</p>

                    <Dropzone
                      onDrop={(acceptedFiles) => {
                        handleAcceptedFiles(acceptedFiles);
                      }}
                    >
                      {({ getRootProps, getInputProps }) => (
                        <div className="dropzone dz-clickable">
                          <div
                            className="dz-message needsclick"
                            {...getRootProps()}
                          >
                            <div className="mb-3">
                              <i className="display-4 text-muted ri-upload-cloud-2-fill" />
                            </div>
                            <h5>Drop files here or click to upload.</h5>
                          </div>
                        </div>
                      )}
                    </Dropzone>
                    <div className="list-unstyled mb-0" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-custom card-header-tabs border-bottom-0">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "1",
                        })}
                        onClick={() => {
                          toggleCustom("1");
                        }}
                      >
                        General Info
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "2",
                        })}
                        onClick={() => {
                          toggleCustom("2");
                        }}
                      >
                        Meta Data
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>

                <CardBody>
                  <TabContent activeTab={customActiveTab}>
                    <TabPane id="addproduct-general-info" tabId="1">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-name-input"
                        >
                          Manufacturer Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="manufacturer-name-input"
                          placeholder="Enter manufacturer name"
                        />
                      </div>
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="manufacturer-brand-input"
                            >
                              Manufacturer Brand
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="manufacturer-brand-input"
                              placeholder="Enter manufacturer brand"
                            />
                          </div>
                        </Col>

                        <Col lg={6}>
                          <Row>
                            <Col sm={6}>
                              <div className="mb-3">
                                <label
                                  className="form-label"
                                  htmlFor="product-price-input"
                                >
                                  Price
                                </label>
                                <div className="input-group mb-3">
                                  <span
                                    className="input-group-text"
                                    id="product-price-addon"
                                  >
                                    $
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="product-price-input"
                                    placeholder="Enter price"
                                    aria-label="Price"
                                    aria-describedby="product-price-addon"
                                  />
                                </div>
                              </div>
                            </Col>
                            <Col sm={6}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="product-discount-input"
                                >
                                  Discount
                                </Label>
                                <div className="input-group mb-3">
                                  <span
                                    className="input-group-text"
                                    id="product-discount-addon"
                                  >
                                    %
                                  </span>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="product-discount-input"
                                    placeholder="Enter discount"
                                    aria-label="discount"
                                    aria-describedby="product-discount-addon"
                                  />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </TabPane>

                    <TabPane id="addproduct-metadata" tabId="2">
                      <Row>
                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="meta-title-input"
                            >
                              Meta title
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter meta title"
                              id="meta-title-input"
                            />
                          </div>
                        </Col>

                        <Col lg={6}>
                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="meta-keywords-input"
                            >
                              Meta Keywords
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="Enter meta keywords"
                              id="meta-keywords-input"
                            />
                          </div>
                        </Col>
                      </Row>

                      <div>
                        <Label
                          className="form-label"
                          htmlFor="meta-description-input"
                        >
                          Meta Description
                        </Label>
                        <textarea
                          className="form-control"
                          id="meta-description-input"
                          placeholder="Enter meta description"
                          rows="3"
                        ></textarea>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>

              <div className="text-end mb-3">
                <button type="submit" className="btn btn-success w-sm">
                  Submit
                </button>
              </div>
            </form>
          </Col>

          <Col lg={4}>
            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Publish</h5>
              </CardHeader>
              <CardBody>
                <div className="mb-3">
                  <Label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    Status
                  </Label>

                  <Select
                    value={selectedStatus}
                    onChange={() => {
                      handleSelectStatus();
                    }}
                    options={productStatus}
                    name="choices-publish-status-input"
                    classNamePrefix="select2-selection form-select"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="choices-publish-visibility-input"
                    className="form-label"
                  >
                    Visibility
                  </Label>

                  <Select
                    value={selectedVisibility}
                    onChange={() => {
                      handleSelectVisibility();
                    }}
                    options={productVisibility}
                    name="choices-publish-visibility-input"
                    classNamePrefix="select2-selection form-select"
                  />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Publish Schedule</h5>
              </CardHeader>

              <CardBody>
                <div>
                  <label
                    htmlFor="datepicker-publish-input"
                    className="form-label"
                  >
                    Publish Date & Time
                  </label>
                  <Flatpickr
                    className="form-control"
                    id="datepicker-publish-input"
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      mode: "multiple",
                      dateFormat: "d.m.y",
                    }}
                  />
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Product Categories</h5>
              </CardHeader>
              <CardBody>
                <p className="text-muted mb-2">
                  {" "}
                  <Link to="#" className="float-end text-decoration-underline">
                    Add New
                  </Link>
                  Select product category
                </p>

                <Select
                  value={selectedGroup}
                  onChange={() => {
                    handleSelectGroup();
                  }}
                  options={productCategory}
                  name="choices-category-input"
                  classNamePrefix="select2-selection form-select"
                />
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Product Tags</h5>
              </CardHeader>
              <CardBody>
                <div className="hstack gap-3 align-items-start">
                  <div className="flex-grow-1">
                    <input
                      className="form-control"
                      placeholder="Enter tags"
                      type="text"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h5 className="card-title mb-0">Product Short Description</h5>
              </CardHeader>
              <CardBody>
                <p className="text-muted mb-2">
                  Add short description for product
                </p>
                <textarea
                  className="form-control"
                  placeholder="Must enter minimum of a 100 characters"
                  rows="3"
                ></textarea>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EcommerceAddProduct;
