import { Component, OnInit } from '@angular/core';

import { Contributor } from 'src/app/domain/Contributor';
import { ContributorsService } from 'src/app/services/contributors.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor(private service: ContributorsService) { }

  list = [];
  contributors: Array<Contributor>;
  interval;

  ngOnInit(): void {
    this.loadContributors(() => {
      this.startShuffleContributors();
    });
  }

  startShuffleContributors(): void {
    this.shuffleContributors();
    this.interval = setInterval(() => {
      this.shuffleContributors();
    }, 10000);
  }

  shuffleContributors(): void {
    const contributorIndexes = this.shuffleContributorsIndexes(4);
    const arr = [];
    contributorIndexes.forEach(index => {
      arr.push(this.contributors[index]);
    });
    this.list = arr;
  }

  shuffleContributorsIndexes(size: number): Array<number> {
    let arr: Array<number>;
    arr = [];
    while (arr.length < size) {
      let exists = false;
      let index = -1;
      do {
        index = this.randomInteger(0, this.contributors.length);
        exists = arr.indexOf(index) >= 0;
      } while (exists);
      arr.push(index);
    }
    return arr;
  }

  randomInteger(min, max): number {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  loadContributors(onReceiveData: Function) {
    this.service.list().subscribe(
      data => {
        this.contributors = data;
        onReceiveData();
      });
  }

}
