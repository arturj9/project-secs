import { Router } from 'express';
import { UsersController } from '../controllers/UsersController';

const usersRoutes = Router();

const controller = new UsersController();

usersRoutes.get('/list', controller.list);
usersRoutes.post('/', controller.create);
usersRoutes.get('/:id', controller.show);
usersRoutes.put('/:id', controller.update);
usersRoutes.delete('/:id', controller.delete);

export { usersRoutes };
