import { Book } from "../dto/Book";

const BOOKS_PER_PAGE = 10;
export class BackendClient{
    static searchBooks = async (keyword, pageNum) => {
        const page = pageNum - 1;
        const response = await fetch(`http://localhost:8000/api/search?keyword=${keyword}&page=${page * BOOKS_PER_PAGE}`).then(response => response.json());
        const bookList = response.items?.map((item) => new Book(item.volumeInfo?.title, item.volumeInfo?.authors, item.volumeInfo?.description, item.volumeInfo?.infoLink, item?.volumeInfo?.imageLinks?.smallThumbnail));

        return bookList
    };
}