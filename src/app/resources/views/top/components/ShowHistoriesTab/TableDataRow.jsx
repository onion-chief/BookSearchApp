export const TableDataRow = (props) => {
    return (
        <tr onClick={props.onClickRow}>
            <td><p>{props.history.keyword}</p></td>
            <td><p>{props.history.date}</p></td>
        </tr>
    );
};