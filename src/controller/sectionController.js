import SectionModel from "../model/sectionsmodel.js";

//------------------------------------------GET-ALL----------------------------------------------------
const getAllSections = async ( _req, res) => {
    try{
        const section = await SectionModel.findAll()
        res.json(section)
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//------------------------------------------GET-BY-ID----------------------------------------------------

const getSection = async ( req, res) => {
    try{
        const section = await SectionModel.findByPk(req.params.id)
        res.json(section)
    
    }catch(error){
        res.status(500).json({message: error.message})
    }


}
//------------------------------------------POST----------------------------------------------------


const createSection = async (req, res) => {
    try{
        await SectionModel.create(req.body)
        res.json({message: "The Section has been created successfully!"})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

//------------------------------------------UPDATE----------------------------------------------------


    const updateSection = async (req, res) => {
        try {
            const sectionId = req.params.id;
            const updatedSection = await SectionModel.update(req.body, { where: { id: sectionId } });
    
            if (updatedSection[0] === 1) {
                console.log(updatedSection[0])
                res.json({ message: 'The Section has been Updated' });
            } else {
                res.status(404).json({ message: 'Section not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}

//------------------------------------------DELETE----------------------------------------------------

const deleteSection = async ( req, res) => {
    try{
        await SectionModel.destroy({where:{id: req.params.id}})
        res.json({message: 'The Section has been deleted'})
    
    }catch(error){
        res.status(500).json({message: error.message})
    }


}

export { getAllSections, getSection, createSection, updateSection, deleteSection}