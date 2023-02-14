import { IUser } from "../entity/IUser";
import { IUserRepository } from "../repository/interface/IUserRepository";

type CreateUserDTO = {
    name: string
    email: string
    password: string
};

class CreateUserService {
    private repository: IUserRepository;
    
    constructor(repository: IUserRepository) {
        this.repository = repository
    };

    public async execute({ email, name, password }: CreateUserDTO): Promise<IUser> {
        if(!name ||!email ||!password) {
            throw new Error('Data not passed');
        }

        const user = await this.repository.create(name, email, password);

        if(!user) {
            throw new Error('User not created');
        }

        return user;
    };
};

export { CreateUserService };
