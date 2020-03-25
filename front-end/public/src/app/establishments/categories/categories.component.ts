import { Router } from "@angular/router";
import { Category } from "./../../domain/Category";
import { CategoryService } from "./../../services/category.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CarouselComponent } from "ngx-bootstrap/carousel/public_api";

@Component({
  selector: "ns-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  constructor(
    private categorieService: CategoryService,
    private router: Router
  ) {}

  itemsPerSlide = 6;
  singleSlideOffset = true;
  @Output() categoria = new EventEmitter();

  slides = [];

  carousel: CarouselComponent;

  images = [
    "assets/img/categories/butchery.png",
    "assets/img/categories/news.png",
    "assets/img/categories/tire.png",
    "assets/img/categories/cafe.png",
    "assets/img/categories/cafe.png",
    "assets/img/categories/clinic.png",
    "assets/img/categories/machinery.png",
    "assets/img/categories/factory.png",
    "assets/img/categories/clinic.png",
    "assets/img/categories/shop.png",
    "assets/img/categories/bread.png",
    "assets/img/categories/order.png",
    "assets/img/categories/petshop.png",
    "assets/img/categories/gas-station.png",
    "assets/img/categories/restaurante.png",
    "assets/img/categories/basket.png",
    "assets/img/categories/basket.png",
    "assets/img/categories/basket.png"
  ];

  ngOnInit(): void {
    let categorias = [];
    this.categorieService.findAll().subscribe(categories => {
      categories.forEach((categoria, index) => {
        let category = { ...categoria };
        category.image = this.images[index];
        categorias.push(category);
      });
    });

    this.slides = categorias;

    this.carousel.nextSlide();
  }

  pause() {
    console.log("pause");
  }

  changeCategoria(category) {
    this.categoria.emit(category);
  }
}
