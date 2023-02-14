import { describe, expect, test } from "vitest";
import { fakeUserRepository } from "../../repository/fakeUserRepository/fakeUserRepository";
import { CreateUserService } from "../CreateUserService";
import { DeleteUserService } from "../DeleteUserService";

describe('Delete User Service', () => {
    
    test('should delete a existents user', async () => {
        const fakeRepository = new fakeUserRepository();
        const createUserService = new CreateUserService(fakeRepository);
        const deleteUserService = new DeleteUserService(fakeRepository);
        const userGenerated = await createUserService.execute({
            email: 'test@test.com',
            name: 'test',
            password: 'test'
        });
        const userDeleted = await deleteUserService.execute(userGenerated.id as string);
        expect(userDeleted).toBe("user deleted successfully");
    });
    
});
