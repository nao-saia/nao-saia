import { Component, OnInit } from '@angular/core';
import { ContribuitorsService } from 'src/app/services/contribuitors.service';
import { Contribuitor } from 'src/app/domain/Contribuitor';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor(private service: ContribuitorsService) { }

  list = [];
  contribuitors: Array<Contribuitor>;
  interval;

  ngOnInit(): void {
    this.loadContribuitors(() => {
      this.startShuffleContribuitors();
    });
  }

  startShuffleContribuitors(): void {
    this.shuffleContribuitors();
    this.interval = setInterval(() => {
      this.shuffleContribuitors();
    }, 10000);
  }

  shuffleContribuitors(): void {
    const contribuitorIndexes = this.shuffleContribuitorsIndexes(4);
    const arr = [];
    contribuitorIndexes.forEach(index => {
      arr.push(this.contribuitors[index]);
    });
    this.list = arr;
  }

  shuffleContribuitorsIndexes(size: number): Array<number> {
    let arr: Array<number>;
    arr = [];
    while (arr.length < size) {
      let exists = false;
      let index = -1;
      do {
        index = this.randomInteger(0, this.contribuitors.length);
        exists = arr.indexOf(index) >= 0;
      } while (exists);
      arr.push(index);
    }
    return arr;
  }

  randomInteger(min, max): number {
    return Math.trunc(Math.random() * (max - min) + min);
  }

  loadContribuitors(onReceiveData: Function) {
    this.service.list().subscribe(
      data => {
        this.contribuitors = data;
        onReceiveData();
      });
  }

}
