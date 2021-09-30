import express from 'express';
import products from './Data/products';

const app = express();

app.get('/', (req: any, res: any) =>{
  res.send('Hello Mage!')
})

app.get('/api/products', (req: any, res: any) =>{
  res.json(products)
})

app.get('/api/products/:id', (req: any, res: any) =>{
  console.log({products})
  const product = products.find((p: any) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000,() =>  console.log('server runnig on por 5000'))