import { useEffect, useState, useRef } from "react";
import { TableHeader } from "./TableHeader";
import { TableDataRow } from "./TableDataRow";
import styles from '../top.module.scss';
import { BackendClient } from "../common/BackendClient";
import { LoadingAnimation } from "./LoadingAnimation";

export const BookTable = (props) => {
    const [hasNext, setHasNext] = useState(false);
    const [bookList, setBookList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitializing, setIsInitializing] = useState(true);
    const searchCount = useRef(0);

    const searchBooks = async (count) => {
        const books = await BackendClient.searchBooks(props.keyword, props.pageNum);
        const nextList = await BackendClient.searchBooks(props.keyword, props.pageNum + 1);
        console.log(count == searchCount.current);
        if (books?.length != 0 && count == searchCount.current) {
            setHasNext(nextList?.length > 0);
            setBookList(books);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsInitializing(false);
    }, []);

    useEffect(() => {
        if (isInitializing) {
            return;
        }
        setIsLoading(true);
        searchCount.current++;
        searchBooks(searchCount.current);
    }, [props.keyword, props.pageNum]);

    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }

    return (
        <>    
            <table class={styles.book_table}>
                <TableHeader></TableHeader>
                {bookList?.map((book) => (
                    <TableDataRow book={book}></TableDataRow>
                ))}
            </table>
            <div class={styles.btns_block}>
                <button class={styles.prev_btn} disabled={props.pageNum == 1} onClick={() => props.onTransitionPage(props.pageNum - 1)}>←</button>
                <label class={styles.current_page}>{props.pageNum}</label>
                <button class={styles.next_btn} disabled={!hasNext} onClick={() => props.onTransitionPage(props.pageNum + 1)}>→</button>
            </div>
        </>
    );
}