import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    socialMedias = {
        github: 'b0nn13/nao-saia',
        instagram: '@naosaia',
        facebook: '@naosaia',
        linkedin: '@naosaia',
        twitter: '@naosaia'
    };

    menu: {
        categories: [
            {
                name: "Farmácias"
                description: "Encontre Farmácias com delivery abertos.",
                ref: "estabelecimento/famarcias",
                icon: "ni ni-spaceship"
            },
            {
                name: "Supermercados"
                description: "Encontre Supermercados com delivery abertos.",
                ref: "estabelecimento/supermercados",
                icon: "ni ni-spaceship"
            },
            {
                name: "Lanchonetes"
                description: "Encontre Restaurantes/Lanchonetes com delivery abertos.",
                ref: "estabelecimento/lanchonetes",
                icon: "ni ni-spaceship"
            },
            {
                name: "Restaurantes"
                description: "Encontre Restaurantes com delivery abertos.",
                ref: "estabelecimento/restaurantes",
                icon: "ni ni-spaceship"
            },
            {
                name: "Outros"
                description: "Encontre outros estabalecimentos.",
                ref: "estabelecimento",
                icon: "ni ni-spaceship"
            },
        ]
    };

    constructor(public location: Location, private router: Router) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
