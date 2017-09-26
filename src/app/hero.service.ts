import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。
//  如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
// HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。
// 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
@Injectable()
export class HeroService {

  constructor() { }
  // getHeroes(): Hero[] {
  //   return HEROES;
  //  }

  // with Promise
  /**
   * 
   * 
   * @returns {Promise<Hero[]>} 
   * @memberof HeroService
   */
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
  // 模拟慢速网络下
  /**
   * 
   * 
   * @returns {Promise<Hero[]>} 
   * @memberof HeroService
   */
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
