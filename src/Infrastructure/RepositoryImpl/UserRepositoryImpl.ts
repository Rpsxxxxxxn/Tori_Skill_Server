import UserEntity from "../../Domain/Entities/UserEntity";
import IUserRepository from "../../Domain/Repositories/UserRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserRepositoryImpl implements IUserRepository {
  public async findAll(): Promise<UserEntity[]> {
    // const users = await prisma.user.findMany();
    // return users;
    throw new Error('ユーザーが存在しません');
  }

  public async findById(id: number): Promise<UserEntity> {
    // const user: UserEntity = await prisma.user.findUnique({
    //   where: {
    //     id: id
    //   },
    //   include: {
    //     EmploymentHistory: true,
    //     Skills: true,
    //     Projects: true,
    //     Qualifications: true,
    //     Education: true,
    //     SelfPromotion: true,
    //   }
    // });
    // return user;
    throw new Error('ユーザーが存在しません');
  }

  public async create(user: UserEntity): Promise<void> {
    // const createUser = await prisma.user.create({
    //   data: {
    //     name: user.name,
    //     email: user.email,
    //     contactNumber: user.contactNumber,
    //     photoUrl: user.photoUrl,
    //     role: user.role.getRole(),
    //     createdAt: user.createdAt.getValue(),
    //     updatedAt: user.updatedAt.getValue()
    //   }
    // });
    // console.log(createUser);
    throw new Error('ユーザーを作成できませんでした');
  }

  public async update(user: UserEntity): Promise<any> {
    // const updateUser = await prisma.user.update({
    //   where: {
    //     id: user.id
    //   },
    //   data: {
    //     name: user.name,
    //     email: user.email,
    //     password: user.password,
    //     role: user.role,
    //     createdAt: user.createdAt,
    //     updatedAt: user.updatedAt
    //   },
    // });
    // console.log(updateUser)
    throw new Error('ユーザーを更新できませんでした');
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