import { Router } from 'express';
import { ClientController } from '../controllers/ClientControllers.ts';
import { ClientService } from '../service/ClientService.ts';
import { ClientRepository } from '../repositories/ClientRepository.ts';

export default function(): Router {
  const clientRouter = Router();
  const clientRepository = new ClientRepository();
  const clientService = new ClientService(clientRepository);
  const clientController = new ClientController(clientService);

  clientRouter.post('/', clientController.createClient.bind(clientController));
  clientRouter.get('/:id', clientController.getClient.bind(clientController));
  clientRouter.put('/:id', clientController.updateClient.bind(clientController));
  clientRouter.delete('/:id', clientController.deleteClient.bind(clientController));
  clientRouter.get('/', clientController.getAllClients.bind(clientController));

  return clientRouter;
}