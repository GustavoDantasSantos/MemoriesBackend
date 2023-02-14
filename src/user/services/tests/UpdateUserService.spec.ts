import { describe, expect, test } from "vitest";
import { IUser } from "../../entity/IUser";
import { fakeUserRepository } from "../../repository/fakeUserRepository/fakeUserRepository";
import { CreateUserService } from "../CreateUserService";
import { UpdateUserService } from "../UpdateUserService";

describe('List all users', () => {

    test('should return all users', async () => {
        const fakeRepository = new fakeUserRepository();
        const createUserService = new CreateUserService(fakeRepository);
        const updateUserService = new UpdateUserService(fakeRepository);

        const userGenerated = await createUserService.execute({
            email: 'test@test.com',
            name: 'test',
            password: 'test'
        });

        const newValueUser = {
            email: 'new@test.com',
            name: 'new',
            password: 'new'    
        } as IUser;
        
        const newUser = await updateUserService.execute(userGenerated.id as string, newValueUser.name, newValueUser.email,  newValueUser.password);
        expect(newUser.email).toContain('new@test.com');
    });
    
});