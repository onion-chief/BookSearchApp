import styles from '../../top.module.scss';
import { useEffect, useState } from 'react';
import { HistoryTable } from './HistoryTable';
import { BackendClient } from "../../common/BackendClient";
import classNames from 'classnames';
import { BookTableModal } from './BookTableModal';

let searchCount = 0;
export const ShowHistoriesTab = (props) => {
    const [pageNum, setPageNum] = useState(1);
    const [hasNext, setHasNext] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [historyList, setHistoryList] = useState([]);
    const [selectedBookList, setSelectedBookList] = useState([]);
    const [isModalOpen, setIsModealOpen] = useState(false);
 
    useEffect(() => {
        fetch(1);
    }, []);

    const onClickUpdate = () => {
        fetch(1);
    };

    const onTransitionPage = (page) => {
        fetch(page);
    };

    const onClickRow = (history) => {
        console.log('history', history)
        setIsModealOpen(true);
        setSelectedBookList(history.bookList);
    }

    const fetch = async (pageNum) => {
        setPageNum(pageNum);
        setIsLoading(true);
        searchCount++;
        fetchHistory(pageNum, searchCount);
    };

    const fetchHistory = async (pageNum, count) => {
        const historyList  = await BackendClient.fetchHistories(pageNum);
        const nextHistoryList  = await BackendClient.fetchHistories(pageNum + 1);

        if (searchCount != count) {
            return;
        }

        setHasNext(nextHistoryList?.length > 0);
        setHistoryList(historyList);
        setIsLoading(false);
    };

    const show = { display: 'block' };
    const hide = { display: 'none' };

    return (
        <>
            <div className={classNames(styles.top_inner, styles.show_histories_tab)} style={props.isShow ? show : hide}>
                <div className={styles.header}><button onClick={ onClickUpdate }>更新</button></div>
                <div className={styles.result_contents_block}>
                    <HistoryTable isLoading={isLoading} historyList={historyList} hasNext={hasNext} pageNum={pageNum} onTransitionPage={onTransitionPage} onClickRow={onClickRow}></HistoryTable>
                </div>
            </div>
            <BookTableModal isOpen={isModalOpen} bookList={selectedBookList} onClickOut={() => setIsModealOpen(false)} hasPagenate={false}></BookTableModal>
        </>
    )
}

