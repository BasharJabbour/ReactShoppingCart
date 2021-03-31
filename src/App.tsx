import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
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

const getProducts = async () => 
  await (await fetch(FAKE_STORE_API_URL)).json()

function App() {
  return (
    <div className="App">
      Start
    </div>
  );
}

export default App;
