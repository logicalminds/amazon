import React from 'react';
import '../Cards/Cards.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cards() {
  const { cards } = useSelector((state) => state.cardsData);

  console.log(cards);

  let mappedCategories = [];
  const Categories = [];
  cards.map((e) => {
    mappedCategories.push(e.category);
  });
  for (let i = 0; i <= mappedCategories.length; i++) {
    if (mappedCategories[i] !== mappedCategories[i + 1]) {
      Categories.push(mappedCategories[i]);
    }
  }

  return (
    <section className='product-cards'>
      <div className='row row-cols-1 row-cols-md-4'>
        {Categories?.map((item, index) => (
          <div key={index}>
            {cards
              .filter((e) => e.category === item)
              .slice(1, 4)
              .map((e) => (
                <div className='col' key={e.id}>
                  <section className='card home-card'>
                    <h5 className='card-title home-card-title'>{e.title}</h5>
                    <div className='imgInCard'>
                      {cards
                        .filter((card) => card.category === item)
                        .slice(1, 3)
                        .map((card) => (
                          <Link to={`/${card.id}`} className='product-link'>
                            <div className='card innerCard'>
                              <div className='card-img product-img-wrapper'>
                                <input
                                  type='image'
                                  className='demo-img'
                                  src={card.image}
                                  alt={`${card.image} image`}
                                />
                              </div>
                              <div className='card-body product-details'>
                                <p className='card-text product-name'>
                                  {e.title}
                                </p>
                                <p className='card-text product-price'>
                                  &#x20B9; {card.price}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                    <div className='imgInCard'>
                      {cards
                        .filter((e) => e.category === item)
                        .slice(2, 4)
                        .map((e) => (
                          <Link to={`/${e.id}`} className='product-link'>
                            <div className='card innerCard'>
                              <div className='card-img product-img-wrapper'>
                                <input
                                  type='image'
                                  className='demo-img'
                                  src={e.image}
                                  alt={`${e.image} image`}
                                />
                              </div>
                              <div className='card-body product-details'>
                                <p className='card-text product-name'>
                                  {e.title}
                                </p>
                                <p className='card-text product-price'>
                                  &#x20B9; {e.price}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                    <Link to='/alldeals' className='allDeals'>
                      See all deals
                    </Link>
                  </section>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className='card horiz-card'>
        <input
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Sep_2021/JUPITER_21/P4/Jupiter_GW-Editorial_P4_1150x323_P4._CB637734438_.jpg'
          alt='image'
        />
      </div>
    </section>
  );
}
