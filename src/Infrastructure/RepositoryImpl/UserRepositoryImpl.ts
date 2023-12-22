import UserEntity from "../../Domain/Entities/UserEntity";
import IUserRepository from "../../Domain/Repositories/UserRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserRepositoryImpl implements IUserRepository {
  public async findAll(): Promise<UserEntity[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  public async findById(id: number): Promise<UserEntity> {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });
    return user;
  }

  public async create(user: UserEntity): Promise<void> {
    const createUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role.getRole(),
        createdAt: user.createdAt.getValue(),
        updatedAt: user.updatedAt.getValue()
      }
    });
    console.log(createUser);
  }

  public async update(user: UserEntity): Promise<any> {
    const updateUser = await prisma.user.update({
      where: {
        id: user.id
      },
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
    console.log(updateUser)
  }

  public async delete(id: number): Promise<void> {
    await prisma.user.delete({
      where: {
        id: id
      }
    });
  }
}

export default UserRepositoryImpl;