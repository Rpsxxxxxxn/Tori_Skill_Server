import UserEntity from "../Entities/UserEntity";
import IUserRepository from "../Repositories/UserRepository";

class UserService {
    private userRepository: IUserRepository;

    constructor(private user: IUserRepository) {
        this.userRepository = user;
    }

    async findAll(): Promise<UserEntity[]> {
        const users: UserEntity[] = await this.userRepository.findAll();
        return users;
    }

    async findById(id: number): Promise<UserEntity> {
        const user: UserEntity = await this.userRepository.findById(id);
        return user;
    }

    async create(user: UserEntity): Promise<void> {
        await this.userRepository.create(user);
    }

    async update(user: UserEntity): Promise<UserEntity> {
        const updatedUser = await this.userRepository.update(user);
        return updatedUser;
    }

    async delete(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}

export default UserService;