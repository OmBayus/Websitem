import React from "react"
import {Container, Image,Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import {MdDateRange} from "react-icons/md"

function CardBlog({topic,author,date,title,content,img,id}){


      return <Container className="Full-Card">
      <Link to={"/blog/"+id} className="Card-link">

            <Row>
            <Col xl={3} lg={4} md={5}><Image src={img} thumbnail className="Card-img"/></Col>
            <Col xl={9} lg={8} md={7}>
                  <p className="text-center text-info">- {topic} -</p>
                  <p className="text-center text-muted"><span className="mr-5"><CgProfile className="card-icon"/>Yazar {author}</span><span className="ml-5"><MdDateRange className="card-icon"/>{date}</span></p>
                  <h2 className="pb-2">{title}</h2>
                  <p>{content}</p>
            </Col>
                  
            </Row>
      </Link>

      </Container>
      
}


export default CardBlog