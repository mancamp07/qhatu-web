import React, { useEffect, useState } from 'react';
import instance from '../../axios/instance';
import PurchasesStl from './PurchasesStl';


const PurchasesSfl = () => {
  const [products, setProducts] = useState({
    loading: true,
    data: undefined,
  });

  const getProducts = async () => {
    try {
      setProducts({ loading: true });
      const products = await instance.get('/gtw-prd/products/getAll');
      setProducts({ loading: false, data: products.data });

      // console.log(products);
      // console.log(products['data'][0].salePrice);

      // const dataProductsMenor = products['data'];
      // dataProductsMenor.sort(((a,b) => a.salePrice - b.salePrice));
      // console.log(dataProductsMenor);

    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);




  return <PurchasesStl products={products}  />;
};

export default PurchasesSfl;
