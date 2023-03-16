import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageDetailApiModel } from "src/app/models/managers/api/pageDetailApiModel";
import { PageInfoApiModel } from "src/app/models/managers/api/pageInfoApiModel";
import { PageApiRouteManager } from "./pageApiRouteManager";

@Injectable()
export class PageApiManager {
    constructor(private routeManager: PageApiRouteManager,
        private httpClient: HttpClient) {

    }

    public async GetAllPages(): Promise<PageInfoApiModel[] | undefined> {
        let route = this.routeManager.PagesRoute();

        return this.httpClient.get<PageInfoApiModel[]>(route).toPromise();
    }

    public async GetPage(page: number): Promise<PageDetailApiModel | undefined> {
        
        let route = this.routeManager.PageRoute(page);
        

        return this.httpClient.get<PageDetailApiModel>(route).toPromise();
    }
}