import { Book } from '../dto/Book';
import { History } from '../dto/History';

export class BackendClient{
    static searchBooks = async (keyword, pageNum, isPagenate) => {
        const body = {
            'keyword': keyword,
            'page': pageNum,
            'isPagenate': isPagenate
        };
        const response = await fetch(
            `http://localhost:8000/api/search`, 
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json());
        console.log('response', response);
        const bookList = response.map((item) => this.toBook(item));

        return bookList
    };

    static fetchHistories = async (pageNum) => {
        const response = await fetch(`http://localhost:8000/api/history?page=${pageNum}`, )
            .then(response => response.json());
        console.log('response', response);
        const historyList = response.map((item) => this.toHistory(item));

        return historyList
    };

    static toBook = (item) => {
        return new Book(item.title, item.authors, item.description, item.infoLinkURL, item.smallThumbnail);
    };

    static toHistory = (item) => {
        return new History(
            item.searchKeyword,
            item.searchDate,
            item.bookList?.map((book) => this.toBook(book))
        );
    }
}