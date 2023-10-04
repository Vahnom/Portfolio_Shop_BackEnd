import Routes from 'express';
import { getAllSections, getSection, createSection, updateSection, deleteSection} from '../controller/sectioncontroller.js'
const routes = Routes();

routes.get('/', getAllSections);
routes.get('/:id', getSection);
routes.post('/', createSection);
routes.put('/:id', updateSection)
routes.patch('/:id', updateSection);
routes.delete('/:id', deleteSection);

export default routes;