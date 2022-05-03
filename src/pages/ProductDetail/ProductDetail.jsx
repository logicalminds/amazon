import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { products } from '../../api';
import Header from '../../components/header/Header';
import { Helmet } from 'react-helmet';
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar';
import './ProductDetails.css';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useDispatch } from 'react-redux';
import { addToCart, addToCartData } from '../../Redux/actions/cartAction';
import { Rating, Skeleton } from '@mui/material';

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { productdetail } = useParams();
  const disptach = useDispatch();

  useEffect(() => {
    axios
      .get(`${products}/${productdetail}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(true);
        console.log('Error in displaying api');
      });
  }, [productdetail]);

  const actualPrice = product.price;
  const discountedPrice = (product.price - product.price * 0.67).toFixed(2);
  const amountSaved = (product.price * 0.67).toFixed(2);
  const amountSavedPercentage = ((amountSaved / actualPrice) * 100).toFixed(2);

  if (loading) {
    return (
      <div>
        <Header />
        <CategoriesBar />
        <div style={{ height: '100vh' }}>
          <Skeleton animation='wave' />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Helmet>
          <title>{product.title}</title>
        </Helmet>
        <Header />
        <CategoriesBar />

        <section className='brief-desc-section'>
          <div className={`product-image-toggle`}>
            <input
              type='image'
              src={product.image}
              className='small-product-image'
              alt='Product demo image'
            />
            <input
              type='image'
              src={product.image}
              className='small-product-image'
              alt='Product demo image'
            />
            <input
              type='image'
              src={product.image}
              className='small-product-image'
              alt='Product demo image'
            />
            <input
              type='image'
              src={product.image}
              className='small-product-image'
              alt='Product demo image'
            />
            <input
              type='image'
              src={product.image}
              className='small-product-image'
              alt='Product demo image'
            />
            <input
              type='image'
              src={product.image}
              className='small-product-image'
              alt='Product demo image'
            />
          </div>
          <div className={`product-image-wrapper`}>
            <input
              type='image'
              src={product.image}
              alt='Product image'
              className='product-image'
            />
          </div>
          <div className='about-product-wrapper'>
            <div className='product-description '>
              <h2 className='product-description-title'>{product.title}</h2>
              {product.rating && (
                <div className='d-flex align-items-center'>
                  <Rating
                    value={product.rating.rate}
                    precision={0.1}
                    readOnly
                    size='small'
                  />
                  <span className='mx-2'>{`${product.rating.count} ratings`}</span>
                </div>
              )}

              <hr />
              <div className='d-flex product-deals'>
                <div className='product-deals-text'>
                  <p>M.R.P.: </p>
                  <div className='product-deals-of-the-day'>
                    <span>Deal of the Day: </span>
                  </div>
                  <p>You Save:</p>
                </div>
                <div>
                  <p className='product-deals-actualPrice'>
                    &#8377;{actualPrice}
                  </p>
                  <div className='product-deals-ends-in'>
                    <span className='product-deals-discountedPrice'>
                      &#8377;{discountedPrice}
                    </span>
                    <p>Ends in 1 day</p>
                  </div>
                  <p className='product-deals-amountSaved'>
                    &#8377;{amountSaved}({amountSavedPercentage}%)
                  </p>
                  <p>Inclusive of all taxes</p>
                </div>
              </div>
              <hr />
              <div>
                <ul className='list-disc list-inside'>
                  <li>{product.description}</li>
                  <li>{product.description}</li>
                  <li>{product.description}</li>
                </ul>
              </div>
            </div>
            <div className='purchase-product-section'>
              <div className='d-flex justify-content-center '>
                <p>Share</p>
                <MailOutlineSharpIcon />
                <FacebookIcon color='primary' />
                <TwitterIcon style={{ color: '#68add3' }} />
                <PinterestIcon style={{ color: '#e03e02' }} />
              </div>

              <div className='card'>
                <div className='card-body'>
                  <button
                    className='btn rounded-pill w-100 add-to-cart-btn'
                    onClick={() => {
                      disptach(addToCart());
                      disptach(addToCartData(productdetail));
                    }}
                  >
                    Add to cart
                  </button>
                  <button className='btn rounded-pill w-100 buy-now-btn'>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
