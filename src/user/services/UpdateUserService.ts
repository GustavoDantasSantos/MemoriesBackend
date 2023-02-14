import { IUser } from "../entity/IUser";
import { IUserRepository } from "../repository/interface/IUserRepository";

class UpdateUserService {
    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    };

    public async execute(id: string, name: string, email: string, password: string): Promise<IUser> {
        const userAlreadyExists = await this.repository.findById(id);
        if (!userAlreadyExists) {
            throw new Error(`User with id ${id} does not exist`);
        };
        const newUser = await this.repository.update(id, name, email, password);
        if(!newUser) {
            throw new Error(`User with id ${id} could not be updated`);
        };
        return newUser;
    };
};

export { UpdateUserService }