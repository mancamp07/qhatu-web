import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductContainer from '../../components/products/ProductContainer';
import CardLoader from '../../components/loader/CardLoader';


const PurchasesStl = ({ products }) => {

  const [order, setOrder] = React.useState('');

  const [category, setCategory] = React.useState([]);

  

  const handleChangeCategory = (event) => {

    const categorys = filtroCategory()
    console.log(categorys);


  };


  const handleChangeOrder = (event) => {
    const orderV = event.target.value
    setOrder(event.target.value);

    if (orderV === 1) {
      ordernar(orderV)
    }
    else if (orderV === 2) {
      ordernar(orderV)
    }
    else if (orderV === 3) {
      ordernar(orderV)
    }
  };

  function ordernar(valorSelect) {
    if (valorSelect === 1) {
      const dataProductsMenor = products['data'];
      dataProductsMenor.sort(((a, b) => a.salePrice - b.salePrice));
    }
    else if (valorSelect === 2) {
      const dataProductsMenor = products['data'];
      dataProductsMenor.sort(((a, b) => b.salePrice - a.salePrice));
    }
    else if (valorSelect === 3) {
      const dataProductsMenor = products['data'];
      dataProductsMenor.sort(((a, b) => a.stock - b.stock));
    }
  }

  function filtroCategory() {
    const dataProductCategory = products['data']
      .map(x => x.category.name)
      .filter((x, index, self) => self.indexOf(x) === index);

    return JSON.stringify(dataProductCategory);
  }

  // const getCategorys = async () => {
    
  //   let urlCat = "http://localhost:3000/category";

  //   await axios
  //     .get(urlCat, { headers: { Authorization: `Bearer ${token}` } })
  //     .then((response) => {
  //       console.log(response.data);
  //       setCategory(JSON.parse(response.data));
  //       console.log(category);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }


  return (
    <>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Box >
            <FormControl size='medium' fullWidth>
              <InputLabel id="demo-simple-select-label">Buscar por</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Buscar por"
                onChange={handleChangeCategory}
              >
                    <MenuItem key={22}>Category</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={8}>
          <Box >
            <FormControl size='medium' fullWidth>
              <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={order}
                label="Orderna por"
                onChange={handleChangeOrder}
                defaultValue=""
              >
                <MenuItem value={1}>Menor precio</MenuItem>
                <MenuItem value={2}>Mayor precio</MenuItem>
                <MenuItem value={3}>Más vendidos</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>



      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}></Grid>
        <Grid item xs={8} sx={{ textAlign: 'right' }}></Grid>
      </Grid>
      <br />
      {products.loading ? (
        <CardLoader />
      ) : (
        <ProductContainer products={products} />
      )}
    </>
  );


};

export default PurchasesStl;
