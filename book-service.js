export class BookService {
    
    constructor() {}

    getBooks() {

        const url = "https://gutendex.com/books/"

        return fetch(url)
        .then(resp => resp.json())
        .then(result => result);

    }
}