import { environment } from "./environment/environment.dev.js";
// import { environment } from "./environment/environment.js";

export class BookService {

    constructor() {}

    getBooks() {
        console.log("Getting books from " + environment.apiUrl);
        return fetch(environment.apiUrl)
        .then(resp => resp.json())
        .then(result => result);

    }
}