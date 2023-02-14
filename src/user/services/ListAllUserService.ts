import { IUser } from "../entity/IUser";
import { IUserRepository } from "../repository/IUserRepository";

class ListAllUserService {

    private repository: IUserRepository;

    constructor(iUserRepository: IUserRepository) {
        this.repository = iUserRepository;
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
