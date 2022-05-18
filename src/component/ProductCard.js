import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img}/>
      <div>{item?.choice === true? "concious choice":""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true?"신제품":""}</div>
    </div>
  )
}

export default ProductCard

//예를 들어 이 카드가 All페이지나 장바구니에도 들어갈 수 있음.