import { describe, expect, test } from "vitest";
import { fakeUserRepository } from "../../repository/fakeUserRepository/fakeUserRepository";
import { CreateUserService } from "../CreateUserService";

describe('Create User Service', () => {
    
    test('should create a new user', async () => {
        const fakeRepository = new fakeUserRepository();
        const createUserService = new CreateUserService(fakeRepository);
        const user = await createUserService.execute({
            name: 'John Doe',
            email: 'upchh@example.com',
            password: '123456'
        });
        expect(user.name).toBe('John Doe');
    });

});
