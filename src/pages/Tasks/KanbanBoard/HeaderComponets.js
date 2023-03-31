import React from "react";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const RenderCardTitle = props => {
  return (
    <React.Fragment>
      <div className="d-flex mb-3 me-4">
        <div className="flex-grow-1">
          <h6 className="fs-13 text-uppercase mb-0"> {props.name} <small className={"badge align-bottom ms-1 bg-" + props.badgeClass}>{props.badge}</small></h6>
        </div>
        <div className="flex-shrink-0">
          <UncontrolledDropdown className="card-header-dropdown" direction='start'>
            <DropdownToggle tag="a" role="button">
              <span className="fw-medium text-muted fs-13">Priority<i className="mdi mdi-chevron-down ms-1" /></span>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem>Priority</DropdownItem>
              <DropdownItem>Date Added</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RenderCardTitle;
