import { IUser } from "../entity/IUser";
import { IUserRepository } from "../repository/interface/IUserRepository";

class ListAllUserService {

    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    };

    public async execute(): Promise<IUser[]> {
        const users = await this.repository.findAll();
        
        if (!users) {
            return [] as IUser[];
        }

        return users;
    }
}

export { ListAllUserService };
