import { IUser } from "../../entity/IUser";
import { IUserRepository } from "../IUserRepository";

class fakeUserRepository implements IUserRepository {
    private usersArrayFake: IUser[] = []

    public findAll(): Promise<IUser[]> {
        const users = new Promise<IUser[]>((resolve) => {
            return resolve(this.usersArrayFake);
        });
        return users;
    };

};

export { fakeUserRepository };