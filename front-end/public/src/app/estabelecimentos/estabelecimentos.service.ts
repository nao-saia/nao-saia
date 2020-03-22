import { Estabelecimento } from "./estabelecimento.model";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { NAO_SAIA_API } from "../app.api";

@Injectable()
export class EstabelecimentosService {
  constructor(private http: HttpClient) {}

  listarEstabelecimentos(search: string = ""): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(
      `${NAO_SAIA_API}/estabelecimentos`,
      { params: { q: search } }
    );
  }
}
