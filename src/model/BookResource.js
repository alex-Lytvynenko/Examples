// @flow
export default class BookResource {
    title: string;
    date: string;
    author: string;
    bookType: string;
    price: string;

    constructor(title: string, date: string, author: string, bookType: string, price: string) {
        this.title = title;
        this.date = date;
        this.author = author;
        this.bookType = bookType;
        this.price = price;
    }
}
