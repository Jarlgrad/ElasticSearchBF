import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let RESULTS = [
      { id:1, title: 'Goodfellas', director: 'Martin Scorsese', year: 1990, genre: 'biography,crime,drama', rating: 8.7},
      { id:2, title: 'Top Gun', director: 'Tony Scott', year: 1986, genre: 'action,drama,romance', rating: 6.9},
      { id:3, title: 'Drive', director: 'Nicholas Winding Refn', year: 2011, genre: 'crime,drama', rating: 7.8}
    ];
    return {RESULTS};
  }
}