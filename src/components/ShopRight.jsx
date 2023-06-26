import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import ProductItem from './ProductItem';

const ShopRight = observer(() => {
  const { product } = useContext(Context);
  return (
    <>
      <div className="auto-shop__catalog">
        {product.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
});

export default ShopRight;
