import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';
import Masonry from "react-masonry-component";


// import Images
import smallImage1 from '../../../assets/images/small/img-1.jpg';
import smallImage2 from '../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../assets/images/small/img-4.jpg';
import smallImage5 from '../../../assets/images/small/img-5.jpg';
import smallImage6 from '../../../assets/images/small/img-6.jpg';
import smallImage7 from '../../../assets/images/small/img-7.jpg';
import smallImage8 from '../../../assets/images/small/img-8.jpg';
import smallImage9 from '../../../assets/images/small/img-9.jpg';
import smallImage10 from '../../../assets/images/small/img-10.jpg';
import smallImage11 from '../../../assets/images/small/img-11.jpg';
import smallImage12 from '../../../assets/images/small/img-12.jpg';

const Gallery = () => {
  
  const [displayCategory, setCategory] = useState("All");
  const gallery = [
    {
        id:1,
        img:smallImage1,
        title:"Glasses and laptop from above",
        auther:"Ron Mackie",
        likes:"2.2K",
        comments:"1.3K",
        category: "Project"
    },
    {
        id:2,
        img:smallImage2,
        title:"Working at a coffee shop",
        auther:"Nancy Martino",
        likes:"2.2K",
        comments:"1.3K",
        category: "Project"
    },
    {
        id:3,
        img:smallImage3,
        title:"Photo was taken in Beach",
        auther:"Elwood Arter",
        likes:"2.2K",
        comments:"1.3K",
        category: "Project"
    },
    {
        id:4,
        img:smallImage4,
        title:"Drawing a sketch",
        auther:"Jason McQuaid",
        likes:"2.2K",
        comments:"1.3K",
        category: "Project"
    },
    {
        id:5,
        img:smallImage5,
        title:"Working from home little spot",
        auther:"Henry Baird",
        likes:"2.2K",
        comments:"1.3K",
        category: "Project"
    },
    {
        id:6,
        img:smallImage6,
        title:"Glasses and laptop from above",
        auther:"Erica Kernan",
        likes:"2.2K",
        comments:"1.3K",
        category: "Designing"
    },
    {
        id:7,
        img:smallImage7,
        title:"Sunrise above a beach",
        auther:"James Ballard",
        likes:"2.2K",
        comments:"1.3K",
        category: "Development"
    },
    {
        id:8,
        img:smallImage8,
        title:"Project discussion with team",
        auther:"Ruby Griffin",
        likes:"2.2K",
        comments:"1.3K",
        category: "Designing"
    },
    {
        id:9,
        img:smallImage9,
        title:"Dramatic clouds at the Golden Gate Bridge",
        auther:"Ron Mackie",
        likes:"2.2K",
        comments:"1.3K",
        category: "Photography"
    },
    {
        id:10,
        img:smallImage10,
        title:"Fun day at the Hill Station",
        auther:"Henry Baird",
        likes:"2.2K",
        comments:"1.3K",
        category: "Development"
    },
    {
        id:11,
        img:smallImage11,
        title:"Cycling in the countryside",
        auther:"Nancy Martino",
        likes:"2.2K",
        comments:"1.3K",
        category: "Designing"
    },
    {
        id:12,
        img:smallImage12,
        title:"A mix of friends and strangers heading off to find an adventure.",
        auther:"Erica Kernan",
        likes:"2.2K",
        comments:"1.3K",
        category: "Designing"
    },
    {
      id:13,
      img:smallImage8,
      title:"Project discussion with team",
      auther:"Ruby Griffin",
      likes:"2.2K",
      comments:"1.3K",
      category: "Photography"
  },
]

    document.title="Gallery | Velzon - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Gallery" pageTitle="Pages" /> 
          <Row>
            <Col lg={12}>
              <div className="">
                <CardBody>
                  <Row>
                    <Col lg={12}>
                      <div className="text-center">
                        <ul className="list-inline categories-filter animation-nav" id="filter">
                          <li className="list-inline-item">
                            <Link to="#" onClick={() => setCategory("All")} className={displayCategory === "All"? "categories active": "categories"} data-filter="*">All</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Project")}className={displayCategory === "Project"? "categories active": "categories"} data-filter=".project">Project</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Designing")}className={displayCategory === "Designing"? "categories active": "categories"} data-filter=".designing">Designing</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Photography")}className={displayCategory === "Photography"? "categories active": "categories"} data-filter=".photography">Photography</Link></li>
                          <li className="list-inline-item"><Link to="#" onClick={() => setCategory("Development")}className={displayCategory === "Development"? "categories active": "categories"} data-filter=".development">Development</Link></li>
                        </ul>
                      </div>

                      <Masonry className="row gallery-wrapper">
                      {(gallery.filter(({ category }) => displayCategory === category || displayCategory === "All")).map(({ img, title, auther,likes,comments },key) => (
                        <Col xxl={3} xl={4} sm={6} className="element-item project designing development" key={key}>
                          <Card className="gallery-box">
                            <div className="gallery-container">
                              <Link className="image-popup" to={img} title="">
                                <img className="gallery-img img-fluid mx-auto" src={img} alt="" />
                                <div className="gallery-overlay">
                                  <h5 className="overlay-caption">{title}</h5>
                                </div>
                              </Link>
                            </div>

                            <div className="box-content">
                              <div className="d-flex align-items-center mt-1">
                                <div className="flex-grow-1 text-muted">by <Link to="#" className="text-body text-truncate">{auther}</Link></div>
                                <div className="flex-shrink-0">
                                  <div className="d-flex gap-3">
                                    <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                      <i className="ri-thumb-up-fill text-muted align-bottom me-1"></i> {likes}
                                    </button>
                                    <button type="button" className="btn btn-sm fs-12 btn-link text-body text-decoration-none px-0">
                                      <i className="ri-question-answer-fill text-muted align-bottom me-1"></i> {comments}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        </Col>
                      ))}
                        
                      </Masonry>
                      <div className="text-center my-2">
                        <Link to="#" className="text-success"><i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load More </Link>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Col>
          </Row>


        </Container>

      </div>
    </React.Fragment>
  )
}

export default Gallery