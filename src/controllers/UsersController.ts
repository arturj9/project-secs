import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export class UsersController {
  public async create(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const {name, email} = request.body;
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    return response.status(201).json({'message':'Usuário criado com sucesso.'});
  }
  public async show(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const {id} = request.params;
    const user = await prisma.user.findUnique({
      where:{
        id
      }
    })

    return response.status(200).json({
      user,
    });
  }
  public async list(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();

    return response.status(200).json({
      users,
    });
  }
  public async update(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const {name, email} = request.body;
    const {id} = request.params;
    const user = await prisma.user.update({
      where:{
        id
      },
      data:{
        name,
        email
      }
    })

    return response.status(201).json({'message':'Usuário atualizado com sucesso.'});
  }
  public async delete(request: Request, response: Response) {
    const prisma = new PrismaClient();
    const id = request.params.id;
    const user = await prisma.user.delete({
      where:{
        id
      }
    })

    return response.status(204).json({'message':'Usuário deletado com sucesso.'});
  }
}
