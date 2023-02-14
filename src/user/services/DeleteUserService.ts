import { IUserRepository } from "../repository/interface/IUserRepository";

class DeleteUserService {

    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    };

    public async execute(id: string): Promise<string> {
        if(!id) {
            throw new Error("id is required");
        }

        await this.repository.delete(id);

        return 'user deleted successfully';
    }
};

export { DeleteUserService };