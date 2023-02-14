import { IUser } from "../../entity/IUser";

export interface IUserRepository {
    findAll(): Promise<IUser[]>;
    create( name: string, email: string, password: string ): Promise<IUser>;
    delete( id: string ): Promise<string>;
    update( id: string, name: string, email: string, password: string ): Promise<IUser>;
    findById( id: string ): Promise<IUser>;
};
