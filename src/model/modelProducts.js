import db from '../data/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define('products', {
    
    title: {type:DataTypes.STRING},
    price: {type:DataTypes.INTEGER},
    description:{type:DataTypes.TEXT},
    product_format:{type:DataTypes.TEXT},
    
    
},{
    timestamps : false
})

export default ProductModel;