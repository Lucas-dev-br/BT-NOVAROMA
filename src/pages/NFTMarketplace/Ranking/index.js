import React, { useMemo } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";
import { Link } from "react-router-dom";

import { NFTRanking } from "../../../common/data";

const Ranking = () => {
    document.title = "Ranking | Velzon - React Admin & Dashboard Template";

    // Ranking Column
    const columns = useMemo(
        () => [
            {
                Header: "Ranking",
                accessor: "ranking",
                filterable: false,
                Cell: (cell) => {
                    if (cell.value < 4) {
                        return (<div className="ranking text-info fw-semibold">#{cell.value}</div>);
                    } else {
                        return (<div className="ranking">#{cell.value}</div>);
                    }
                }
            },
            {
                Header: "Collection",
                filterable: false,
                Cell: (collection) => (
                    <>
                        <div className="collection">
                            <div className="d-flex align-items-center">
                                <img src={collection.row.original.img} alt="" className="avatar-xs rounded-circle object-cover me-2" /> <Link to="/apps-nft-item-details" className="link-dark">{collection.row.original.collection}</Link>
                            </div>
                        </div>
                    </>
                ),
            },
            {
                Header: "Volume",
                accessor: "volume_price",
                filterable: false,
            },
            {
                Header: "24h%",
                accessor: "hours",
                filterable: false,
                Cell: (cell) => {
                    if (cell.value > 0) {
                        return (<h6 className="text-success mb-1 24h" > {cell.value} ETH</h6 >);
                    } else {
                        return (<h6 className="text-danger mb-1 24h">{cell.value} ETH</h6>);
                    }
                }
            },
            {
                Header: "7d%",
                accessor: "day",
                filterable: false,
                Cell: (cell) => {
                    if (cell.value > 0) {
                        return (<h6 className="text-success mb-1 7d" > {cell.value} ETH</h6 >);
                    } else {
                        return (<h6 className="text-danger mb-1 7d">{cell.value} ETH</h6>);
                    }
                }
            },
            {
                Header: "Item",
                accessor: "item",
                filterable: false,
            },
            {
                Header: "Floor Price",
                accessor: "floor_price",
                filterable: false,
            },
        ],
        []);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Ranking" pageTitle="NFT Marketplace" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card" id="contactList">
                                <div className="card-header">
                                    <div className="d-flex align-items center">
                                        <h5 className="card-title mb-0 flex-grow-1">The top NFTs ranking on Velzon</h5>
                                        <p className="text-muted mb-0">Updated: 28 April, 2022 08:05:00</p>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-between g-3">
                                        <div className="col-xxl-3 col-sm-6">
                                            <div className="search-box">
                                                <input type="text" className="form-control search" placeholder="Search for ..." />
                                                <i className="ri-search-line search-icon"></i>
                                            </div>
                                        </div>

                                        <div className="col-xxl-2 col-sm-4">
                                            <div>
                                                <select className="form-control" data-choices data-choices-search-false name="choices-single-default" id="idStatus">
                                                    <option value="All Time" defaultValue>All Time</option>
                                                    <option value="1 Day">1 Day</option>
                                                    <option value="7 Days">7 Days</option>
                                                    <option value="15 Days">15 Days</option>
                                                    <option value="1 Month">1 Month</option>
                                                    <option value="6 Month">6 Month</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="card-body">
                                    {NFTRanking && NFTRanking.length > 0 ? (
                                        <TableContainer
                                            columns={columns}
                                            data={(NFTRanking || [])}
                                            isGlobalFilter={false}
                                            isAddUserList={false}
                                            customPageSize={10}
                                            className="custom-header-css"
                                            divClass="table-responsive table-card mb-3"
                                            tableClass="align-middle table-nowrap"
                                            theadClass="table-light text-muted"
                                        />
                                    ) : (
                                        <div className="noresult">
                                            <div className="text-center">
                                                <lord-icon src="https://cdn.lordicon.com/msoeawqm.json" trigger="loop" colors="primary:#405189,secondary:#0ab39c" style={{ width: "75px", height: "75px" }}></lord-icon>
                                                <h5 className="mt-2">Sorry! No Result Found</h5>
                                                <p className="text-muted mb-0">We've searched more than 150+ transactions We did not find any transactions for you search.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Ranking;
