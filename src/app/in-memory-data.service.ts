import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', date: "20.03.2020" },
      { id: 12, name: 'Narco', date: "21.03.2021" },
      { id: 13, name: 'Bombasto', date: "20.09.2020" },
      { id: 14, name: 'Celeritas', date: "02.03.2019" },
      { id: 15, name: 'Magneta', date: "20.05.2012" },
      { id: 16, name: 'RubberMan', date: "20.08.2020" },
      { id: 17, name: 'Dynama', date: "20.03.2019" },
      { id: 18, name: 'Dr IQ', date: "20.03.2018" },
      { id: 19, name: 'Magma', date: "20.03.2017" },
      { id: 20, name: 'Tornado', date: "20.03.2016" }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}