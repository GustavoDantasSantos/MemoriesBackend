import { describe, expect, test } from 'vitest';
import { fakeUserRepository } from '../../repository/fakeUserRepository/fakeUserRepository';
import { ListAllUserService } from '../ListAllUserService';

describe('List all users', () => {

    test('should return all users', async () => {
        const fakeRepository = new fakeUserRepository();
        const listAllUserService = new ListAllUserService(fakeRepository);
        const users = await listAllUserService.execute();
        expect(users).toHaveLength(0);
    });
    
});
