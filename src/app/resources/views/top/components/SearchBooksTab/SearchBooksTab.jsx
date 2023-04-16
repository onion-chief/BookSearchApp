import styles from '../../top.module.scss';
import { useState } from 'react';
import { BookTable } from './BookTable';
import { BackendClient } from '../../common/BackendClient';
import classNames from 'classnames';

let searchCount = 0;
export const SearchBooksTab = (props) => {
    const [pageNum, setPageNum] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [hasNext, setHasNext] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [bookList, setBookList] = useState([]);

    const onClickSearch = async () => {
        search(1, false);
    };

    const onKeyDownSearch = async (e) => {
        if (e.nativeEvent.isComposing || e.key !== 'Enter') {
            return;
        }
        
        search(1, false);
    };
    
    const search = async (pageNum, isPagenate) => {
        setPageNum(pageNum);
        setIsLoading(true);
        searchCount++;
        console.log('searchCOunt', searchCount);
        searchBooks(keyword, pageNum, searchCount, isPagenate);
    };

    const searchBooks = async (keyword, page, count, isPagenate) => {
        const books = await BackendClient.searchBooks(keyword, page, isPagenate);
        const nextList = await BackendClient.searchBooks(keyword, page + 1, true);

        console.log('seare',searchCount == count, count, searchCount.current);
        if (searchCount == count) {
            setBookList(books);
            setHasNext(nextList?.length > 0);
            setIsLoading(false);
        } else {
            console.log('ignore')
        }
    };

    const onTransitionPage = (pageNum) => {
        search(pageNum, true);
    }

    const show = { display: 'block' };
    const hide = { display: 'none' };

    console.log(props.isShow);
    return (
        <div className={classNames(styles.top_inner, styles.search_books_tab)} style={props.isShow ? show : hide}>
            <div className={styles.search_input_block}>
                <div className={styles.search}>
                    <div className={styles.title}>書籍名</div>
                    <div className={styles.input_text_block}>
                        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={onKeyDownSearch}></input>
                    </div>
                    <div className={styles.btn_block}>
                        <button onClick={onClickSearch}>検索</button>
                    </div>
                </div>
            </div>
            <div className={styles.result_contents_block}>
                <BookTable bookList={bookList} pageNum={pageNum} hasNext={hasNext} onTransitionPage={onTransitionPage} isLoading={isLoading} hasPagenate={true} zeroText={'検索結果は0件です。'}></BookTable>
            </div>
        </div>
    )
}

