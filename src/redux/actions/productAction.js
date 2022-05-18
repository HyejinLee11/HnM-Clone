// 미들 웨어 함수는 함수를 리턴한다.
function getProducts(searchQuery){
  return async(dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/HyejinLee11/HnM-Clone/products?q=${searchQuery}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
  };
}

function getProductDetail(id) {
  return async(dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/HyejinLee11/HnM-Clone/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({type:"GET_PRODUCTDETAIL", payload:{data}});
  }
}

export const productAction={getProducts, getProductDetail}