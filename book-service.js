export class BookService {
    
    static url = "https://gutendex.com/books/"

    constructor() {}

    getBooks() {

        return fetch(BookService.url)
        .then(resp => resp.json())
        .then(result => result);

    }
}