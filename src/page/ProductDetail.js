import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams()
  console.log("usePrams가 가져오는 id란?",id)
  const [product, setProduct] = useState(null);
  const getProductDetail= async() => {
    let url = `https://my-json-server.typicode.com/HyejinLee11/HnM-Clone/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  },[])

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice}</div>

        </Col>
      </Row>
    </Container>

  )
}

export default ProductDetail