export class History {
    constructor(keyword, date, bookList) {
        this._keyword = keyword ?? '';
        this._date = date ?? '';
        this._bookList = bookList ?? [];
    }

    get keyword() {
        return this._keyword;
    }

    get date() {
        return this._date;
    }

    get bookList() {
        return this._bookList;
    }
}