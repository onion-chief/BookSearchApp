import { useEffect, useState, useRef } from "react";
import { TableHeader } from "./TableHeader";
import { TableDataRow } from "./TableDataRow";
import styles from '../../top.module.scss';
import { LoadingAnimation } from "../LoadingAnimation";

export const HistoryTable = (props) => {
    if (props.isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }

    console.log('props.bookList', props.historyList);
    return (
        <>    
            <table className={styles.book_table}>
                <TableHeader></TableHeader>
                {props.historyList?.map((history) => (
                    <TableDataRow onClickRow={() => props.onClickRow(history)} history={history}></TableDataRow>
                ))}
            </table>
            <div className={styles.btns_block}>
                <button className={styles.prev_btn} disabled={props.pageNum == 1} onClick={() => props.onTransitionPage(props.pageNum - 1)}>←</button>
                <label className={styles.current_page}>{props.pageNum}</label>
                <button className={styles.next_btn} disabled={!props.hasNext} onClick={() => props.onTransitionPage(props.pageNum + 1)}>→</button>
            </div>
        </>
    );
}