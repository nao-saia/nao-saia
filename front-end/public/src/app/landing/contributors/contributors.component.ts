import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor() { }

  list = [];
  contribuitors = [];
  interval;

  ngOnInit(): void {
    this.loadContribuitors();
    this.startShuffleContribuitors();
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

  loadContribuitors() {
    this.contribuitors.push({
      name: "Fabio Xavier",
      description: "Web Developer",
      github: "https://github.com/b0nn13",
      instagram: "https://www.instagram.com/fabio.o.xavier/",
      facebook: "https://www.facebook.com/fabio0fficial",
      linkedin: "https://www.linkedin.com/in/fabio-o-xavier/",
      twitter: "https://twitter.com/fabio0fficial",
      image: "https://instagram.fgyn3-1.fna.fbcdn.net/v/t51.2885-15/e35/20968701_2001685073406483_189665601172537344_n.jpg?_nc_ht=instagram.fgyn3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Nek9vOwZsyQAX8SXXWi&oh=041628257377f4f8d852b3543b5bb3f2&oe=5EB21AD6"
    });
    this.contribuitors.push({
      name: "Tony William",
      description: "Web Developer",
      facebook: "https://www.facebook.com/fabio0fficial",
      github: "https://github.com/b0nn13",
      instagram: "https://www.instagram.com/fabio.o.xavier/",
      linkedin: "https://www.linkedin.com/in/fabio-o-xavier/",
      twitter: "https://twitter.com/fabio0fficial",
      image: "https://instagram.fgyn3-1.fna.fbcdn.net/v/t51.2885-15/e35/66602306_113506116614443_6207763020185220526_n.jpg?_nc_ht=instagram.fgyn3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=APsvIaAJWncAX8PKZA1&oh=d5aa86c5aa5503ac9271090434abb1fe&oe=5EB292E8"
    });
    this.contribuitors.push({
      name: "Eloi Lelis",
      description: "Marketing e Design",
      instagram: "https://www.instagram.com/fabio.o.xavier/",
      facebook: "https://www.facebook.com/fabio0fficial",
      linkedin: "https://www.linkedin.com/in/fabio-o-xavier/",
      twitter: "https://twitter.com/fabio0fficial",
      image: "https://instagram.fgyn3-2.fna.fbcdn.net/v/t51.2885-15/e35/80664437_847112295733307_2832655464638427310_n.jpg?_nc_ht=instagram.fgyn3-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_bi06bjqrGsAX_FNUGH&oh=2b407887847a9728eb0c1bdb3cf97dbc&oe=5EA18876"
    });
    this.contribuitors.push({
      name: "Larissa Solino",
      description: "Marketing e Design",
      instagram: "https://www.instagram.com/fabio.o.xavier/",
      facebook: "https://www.facebook.com/fabio0fficial",
      linkedin: "https://www.linkedin.com/in/fabio-o-xavier/",
      twitter: "https://twitter.com/fabio0fficial",
      image: "https://instagram.fgyn3-2.fna.fbcdn.net/v/t51.2885-19/s150x150/81368035_2557339411189785_3180923277010796544_n.jpg?_nc_ht=instagram.fgyn3-2.fna.fbcdn.net&_nc_ohc=Vn_Pc_Qzg4IAX_KPA2W&oh=2758be5b1c51db4914f8a3d8de27f3a6&oe=5EA01F70"
    });

  }

}
