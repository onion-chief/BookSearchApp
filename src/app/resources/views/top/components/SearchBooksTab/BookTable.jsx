import { TableHeader } from "./TableHeader";
import { TableDataRow } from "./TableDataRow";
import styles from '../../top.module.scss';
import { LoadingAnimation } from "../LoadingAnimation";

export const BookTable = (props) => {
    if (props.isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
    console.log('props.bookList', props.bookList);
    
    const show = { display: 'block' };
    const hide = { display: 'none' };
    return (
        <>   
            <table className={styles.book_table}>
                <TableHeader></TableHeader>
                {props.bookList?.map((book) => (
                    <TableDataRow book={book}></TableDataRow>
                ))}
            </table>
            { props.bookList?.length == 0 ? <div>{props.zeroText}</div> : null }
            <div className={styles.btns_block} style={props.hasPagenate ? show: hide}>
                <button className={styles.prev_btn} disabled={props.pageNum == 1} onClick={() => props.onTransitionPage(props.pageNum - 1)}>←</button>
                <label className={styles.current_page}>{props.pageNum}</label>
                <button className={styles.next_btn} disabled={!props.hasNext} onClick={() => props.onTransitionPage(props.pageNum + 1)}>→</button>
            </div>
        </>
    );
}