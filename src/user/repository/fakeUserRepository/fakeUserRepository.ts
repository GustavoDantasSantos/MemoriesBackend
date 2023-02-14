import { IUser } from "../../entity/IUser";
import { IUserRepository } from "../interface/IUserRepository";

class fakeUserRepository implements IUserRepository {
    private usersArrayFake: IUser[] = []

    public findAll(): Promise<IUser[]> {
        const users = new Promise<IUser[]>((resolve) => {
            return resolve(this.usersArrayFake);
        });
        return users;
    };

    create(name: string, email: string, password: string): Promise<IUser> {
        const user = new Promise<IUser>((resolve) => {
            const user = {id: '456456465465465465465465465465465', name, email, password} as IUser;
            this.usersArrayFake.push(user);
            return resolve(user);
        });
        return user;
    };

    delete(id: string): Promise<string> {
        const message = new Promise<string>((resolve) => {
            const newArray = this.usersArrayFake.filter((user) => user.id!== id);
            this.usersArrayFake = newArray;
            return resolve('user deleted successfully');    
        });
        return message;
    };

    update(id: string, name: string, email: string, password: string): Promise<IUser> {
        const user = new Promise<IUser>((resolve) => {
            const findUser = this.usersArrayFake.find((user) => user.id === id);
            const user = {...findUser, name, email, password} as IUser;
            this.usersArrayFake.push(user);
            return resolve(user);
        });
        return user;
    }

    findById(id: string): Promise<IUser> {
        const user = new Promise<IUser>((resolve) => {
            const findUser = this.usersArrayFake.find((user) => user.id === id);
            if(findUser) {
                return resolve(findUser);
            }
        });
        return user;
    }
};

export { fakeUserRepository };