import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as React from 'react';
import styles from './top.module.scss';
import classNames from 'classnames';
import { SearchBooksTab } from './components/SearchBooksTab/SearchBooksTab';
import { ShowHistoriesTab } from './components/ShowHistoriesTab/ShowHistoriesTab';

const Tab = {
    SearchBooks: 0,
    ShowHistory: 1
};

export const Top = () => {
    const [selectedTab, setSelectedTab] = useState(Tab.SearchBooks);

    return (
        <div class={styles.top}>
            <div class={styles.tab_list}>
                <div className={classNames(styles.tab, {[styles.selected]: selectedTab == Tab.SearchBooks})} onClick={() => setSelectedTab(Tab.SearchBooks)}>書籍検索</div>
                <div className={classNames(styles.tab, {[styles.selected]: selectedTab == Tab.ShowHistory})} onClick={() => setSelectedTab(Tab.ShowHistory)}>検索履歴</div>
            </div>
            <SearchBooksTab isShow={selectedTab == Tab.SearchBooks}></SearchBooksTab>
            <ShowHistoriesTab isShow={selectedTab == Tab.ShowHistory}></ShowHistoriesTab>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));
root.render(<Top></Top>);