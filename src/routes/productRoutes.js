import Routes from 'express';
import {getAllProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controller/controllerProducts.js'
const routes = Routes();

routes.get('/', getAllProducts);
routes.get('/:id', getProduct);
routes.post('/', createProduct);
routes.put('/:id', updateProduct)
routes.patch('/:id', updateProduct);
routes.delete('/:id', deleteProduct);

export default routes;

