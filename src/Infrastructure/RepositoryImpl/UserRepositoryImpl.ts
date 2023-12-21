import UserEntity from "../../Domain/Entities/UserEntity";
import IUserRepository from "../../Domain/Repositories/UserRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserRepositoryImpl implements IUserRepository {
    public async findAll(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }

    public async findById(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    public async create(user: UserEntity): Promise<void> {
        const createUser = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email
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
                email: user.email
            }
        });
        console.log(updateUser)
    }

    public async delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

export default UserRepositoryImpl;