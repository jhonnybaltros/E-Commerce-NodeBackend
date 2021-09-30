import express from 'express';
import products from './Data/products';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) =>{
  res.send('Hello Mage!')
})

app.get('/api/products', (req: Request, res: Response) =>{
  res.json(products)
})

app.get('/api/products/:id', (req: Request, res: Response) =>{
  console.log({products})
  const product = products.find((p: any) => p._id === req.params.id)
  res.json(product)
})

app.listen(5000,() =>  console.log('server runnig on por 5000'))