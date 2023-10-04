import db from '../data/db.js';
import { DataTypes } from 'sequelize';

const SectionModel = db.define('product_sections', {
    
    section_name: {type:DataTypes.STRING}
    
},{
    timestamps : false
})

export default SectionModel;