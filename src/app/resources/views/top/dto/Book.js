export class Book {
    constructor(title, authors, description, infoLink, smallThumbnail) {
        this._title = title ?? '';
        this._authors = authors ?? [];
        this._description = description ?? '';
        this._infoLink = infoLink ?? '';
        this._smallThumbnail = smallThumbnail ?? '/img/noimage.png';
    }

    get title() {
        return this._title;
    }

    get authors() {
        return this._authors;
    }

    get description() {
        return this._description;
    }

    get infoLink() {
        return this._infoLink;
    }

    get smallThumbnail() {
        return this._smallThumbnail;
    }
}