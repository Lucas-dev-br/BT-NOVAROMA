import React from 'react';
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { SalesForecastCharts } from './DashboardCrmCharts';

const SalesForecast = () => {
    return (
        <React.Fragment>
            <Col xxl={3} md={6}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Sales Forecast</h4>
                        <div className="flex-shrink-0">
                            <UncontrolledDropdown className="card-header-dropdown">
                                <DropdownToggle tag="a" className="text-reset dropdown-btn" role="button">
                                    <span className="fw-semibold text-uppercase fs-12">Sort by: </span><span className="text-muted">Nov 2021<i className="mdi mdi-chevron-down ms-1"></i></span>
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-start">
                                    <DropdownItem>Oct 2021</DropdownItem>
                                    <DropdownItem>Nov 2021</DropdownItem>
                                    <DropdownItem>Dec 2021</DropdownItem>
                                    <DropdownItem>Jan 2022</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </CardHeader>
                    <div className="card-body pb-0">
                        <div id="sales-forecast-chart" className="apex-charts" dir="ltr">
                            <SalesForecastCharts dataColors='["--vz-primary", "--vz-success", "--vz-warning"]' />
                        </div>
                    </div>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default SalesForecast;