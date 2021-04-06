import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import Item from './Item/Item'
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
// Styles
import { Wrapper } from './App.styles'

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
  amount: number;
}


const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products'

const getProducts = async (): Promise<CartItemType[]> => 
  await (await fetch(FAKE_STORE_API_URL)).json();

function App() {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data)

  const getTotalItems = () => null;

  const handleAddToCart = (item: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) { return <LinearProgress /> }
  if (error) { return <div>An Error Occured.</div> }

  return (
    <div className="App">
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
