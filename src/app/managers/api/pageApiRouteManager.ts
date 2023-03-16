export class PageApiRouteManager {
    baseAddress = 'https://api.111minutes.com/wp-json/api/v1/';

    PagesRoute(): string {
        return `${this.baseAddress}pages`;
    }

    PageRoute(page: number): string {
        return `${this.baseAddress}pages/${page}`;
    }

    ElementsRoute(){
        return `${this.baseAddress}elements`
    }
}