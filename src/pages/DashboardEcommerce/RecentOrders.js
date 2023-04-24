import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { recentOrders } from '../../common/data';

const RecentOrders = () => {
    return (
        <React.Fragment>
            <Col xl={12}>
                <Card>
                    <CardHeader className="align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Vagas de estagio</h4>
                        <div className="flex-shrink-0">
                            
                        </div>
                    </CardHeader>

                    <CardBody>
                        <div className="table-responsive table-card">
                            <table className="table table-borderless table-centered align-middle table-nowrap mb-0">
                                <thead className="text-muted table-light">
                                    <tr>
                                        <th scope="col">Empresa</th>
                                        <th scope="col">Vaga</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Status</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(recentOrders || []).map((item, key) => (<tr key={key}>
                                        
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 me-2">
                                                    <img src={item.img} alt="" className="avatar-xs rounded-circle" />
                                                </div>
                                                <div className="flex-grow-1">{item.name}</div>
                                            </div>
                                        </td>
                                        <td>{item.product}</td>
                                        
                                        <td>{item.vendor}</td>
                                        <td>
                                            <span className={"badge fs-12 badge-soft-" + item.statusClass}>{item.status}</span>
                                        </td>
                                        <td className='d-flex justify-content-end'>
                                        <button type="button" className="btn btn-soft-info btn-md">
                                        Canditar-se <i className="ri-account-circle-fill align-middle"></i> 
                            </button>
                                        </td>
                                    </tr>))}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default RecentOrders;