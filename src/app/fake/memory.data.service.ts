import { InMemoryDbService } from 'angular-in-memory-web-api';
import { users } from './user.db';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { users };
  }
}
