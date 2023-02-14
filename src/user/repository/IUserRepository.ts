import { IUser } from "../entity/IUser";

export interface IUserRepository {
    findAll(): Promise<IUser[]>;
}