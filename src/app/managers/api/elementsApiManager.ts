import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ElementApiModel } from 'src/app/models/managers/api/ElementsApiModel';
import { PageApiRouteManager } from './pageApiRouteManager';

@Injectable()
export class ElementsApiManager {
  constructor(
    private routeManager: PageApiRouteManager,
    private httpClient: HttpClient
  ) {}

  public async GetAllElements() {
    const route = this.routeManager.ElementsRoute();

    return this.httpClient.get<ElementApiModel>(route).toPromise();
  }
}
