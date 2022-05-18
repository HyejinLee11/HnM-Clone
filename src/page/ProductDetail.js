import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'

const ProductDetail = () => {
  let {id} = useParams()
  console.log("usePrams가 가져오는 id란?",id)
  // const [product, setProduct] = useState(null);
  const product = useSelector(state => state.product.product);
  const dispatch = useDispatch();
  const getProductDetail= () => {
    // console.log(data);
    dispatch(productAction.getProductDetail(id))
    // setProduct(data);
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