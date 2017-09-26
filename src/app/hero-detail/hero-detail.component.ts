import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// 抽取共享组件
export class HeroDetailComponent implements OnInit {
  // selectedHero为一个输入属性
  @Input() selectedHero: Hero;
  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.selectedHero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}
