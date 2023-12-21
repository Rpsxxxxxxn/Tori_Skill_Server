import UserEntity from "../Entities/UserEntity";

interface IUserRepository {
    findAll(): Promise<UserEntity[]>;
    findById(id: number): Promise<UserEntity>;
    create(user: UserEntity): Promise<void>;
    update(user: UserEntity): Promise<UserEntity>;
    delete(id: number): Promise<void>;
}

export default IUserRepository;