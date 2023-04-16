import styles from '../../top.module.scss';
import { BookTable } from '../SearchBooksTab/BookTable';

export const BookTableModal = (props) => {

    const show = { display: 'flex'};
    const hide = { display: 'none' };
    return (
        <>
            <div style={props.isOpen ? show : hide} className={styles.modal_wrapper} onClick={props.onClickOut}>
                <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                    <BookTable bookList={props.bookList ?? []} zeroText={'この履歴の検索結果は0件です。'} hasPagenation={false}></BookTable>
                </div>
            </div>
        </>
    );
};