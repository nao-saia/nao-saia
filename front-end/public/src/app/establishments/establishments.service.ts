import { Establishment } from "./establishment.model";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { NAO_SAIA_API } from "../app.api";

@Injectable()
export class EstablishmentService {
  constructor(private http: HttpClient) {}

  listarEstabelecimentos(search: string = ""): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(
      `${NAO_SAIA_API}/estabelecimentos`,
      { params: { q: search } }
    );
  }
}
