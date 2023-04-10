import { startTransition, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import styles from './top.module.scss';
import { BookTable } from './components/BookTable';
import { BackendClient } from './common/BackendClient';

export const Top = () => {
    const [pageNum, setPageNum] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [searchPageNum, setSearchPageNum] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState('');

    const onClickSearch = async () => {
        setPageNum(1);
        setSearchKeyword(keyword);
    };

    const onTransitionPage = (pageNum) => {
        setPageNum(pageNum++);
    }

    return (
        <div class={styles.top}>
            <div class={styles.top_inner}>
                <div class={styles.search_input_block}>
                    <div class={styles.search}>
                        <div class={styles.title}>書籍名</div>
                        <div class={styles.input_text_block}>
                            <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input>
                        </div>
                        <div class={styles.btn_block}>
                            <button onClick={onClickSearch}>検索</button>
                        </div>
                    </div>
                </div>
                <div class={styles.result_contents_block}>
                    <BookTable keyword={searchKeyword} pageNum={pageNum} onTransitionPage={onTransitionPage}></BookTable>
                </div>
            </div>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Top></Top>);