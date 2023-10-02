import ProductModel from "../model/modelProducts.js";

//------------------------------------------GET-ALL----------------------------------------------------
const getAllProducts = async ( _req, res) => {
    try{
        const products = await ProductModel.findAll()
        res.json(products)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//------------------------------------------GET-BY-ID----------------------------------------------------

const getProduct = async ( req, res) => {
    try{
        const product = await ProductModel.findByPk(req.params.id)
        res.json(product)
    
    }catch(error){
        res.status(500).json({message: error.message})
    }


}
//------------------------------------------POST----------------------------------------------------


const createProduct = async (req, res) => {
    try{
        await ProductModel.create(req.body)
        res.json({message: "The book has been created successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//------------------------------------------UPDATE----------------------------------------------------


    const updateProduct = async (req, res) => {
        try {
            const productId = req.params.id;
            const updatedProduct = await ProductModel.update(req.body, { where: { id: productId } });
    
            if (updatedProduct[0] === 1) {
                console.log(updatedProduct[0])
                res.json({ message: 'The product has been Updated' });
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}

//------------------------------------------DELETE----------------------------------------------------

const deleteProduct = async ( req, res) => {
    try{
        await ProductModel.destroy({where:{id: req.params.id}})
        res.json({message: 'The product has been deleted'})
    
    }catch(error){
        res.status(500).json({message: error.message})
    }


}

export { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct}