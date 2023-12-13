import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrumb from '../Components/breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/decriptionBox/DescriptionBox';
import RelatedProduct from '../Components/relatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const {productId} = useParams();
  // console.log(productId, "product id ");
  const product = all_product?.find((item)=> item.id === Number(productId));
  // console.log(product, "selected product")

  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProduct />
    </div>
  )
}

export default Product;
