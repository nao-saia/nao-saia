import { environment } from './../environments/environment';
import { LoaderService } from './shared/loader/loader.service';
import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare let gtag: Function;

// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = 0;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    private _production = false;

    constructor(private renderer: Renderer2,
        private router: Router,
        @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
        public location: Location,
        private loader: LoaderService) {
        this._production = environment.production;
    }
    // @HostListener('window:scroll', ['$event'])
    // hasScrolled() {

    // var st = window.pageYOffset;
    // // Make sure they scroll more than delta
    // if(Math.abs(lastScrollTop - st) <= delta)
    //     return;

    // var navbar = document.getElementsByTagName('nav')[0];

    // // If they scrolled down and are past the navbar, add class .headroom--unpinned.
    // // This is necessary so you never see what is "behind" the navbar.
    // if (st > lastScrollTop && st > navbarHeight){
    //     // Scroll Down
    //     // if (navbar.classList.contains('headroom--pinned')) {
    //     //     navbar.classList.remove('headroom--pinned');
    //     //     navbar.classList.add('headroom--unpinned');
    //     // }
    //     // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
    // } else {
    //     // Scroll Up
    //     //  $(window).height()
    //     if(st + window.innerHeight < document.body.scrollHeight) {
    //         // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
    //         if (navbar.classList.contains('headroom--unpinned')) {
    //             navbar.classList.remove('headroom--unpinned');
    //             navbar.classList.add('headroom--pinned');
    //         }
    //     }
    // }

    // lastScrollTop = st;
    // };
    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        navbar.classList.add('headroom--not-top');
        //   this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //       if (window.outerWidth > 991) {
        //           window.document.children[0].scrollTop = 0;
        //       }else{
        //           window.document.activeElement.scrollTop = 0;
        //       }
        //       this.renderer.listen('window', 'scroll', (event) => {
        //           const number = window.scrollY;
        //           if (number > 150 || window.pageYOffset > 150) {
        //               // add logic
        //               navbar.classList.add('headroom--not-top');
        //           } else {
        //               // remove logic
        //               navbar.classList.remove('headroom--not-top');
        //           }
        //       });
        //   });
        //   this.hasScrolled();

        this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => {
                this.loader.clearStatus();
            });

        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) => {
                if (this._production) {
                    gtag('config', 'G-K2Z2E4X017',
                        {
                            'page_path': event.urlAfterRedirects
                        }
                    );
                }
            });
    }
}
