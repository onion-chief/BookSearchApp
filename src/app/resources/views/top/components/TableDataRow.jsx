export const TableDataRow = (props) => {
    return (
        <tr>
            <td><img src={props.book.smallThumbnail}/></td>
            <td><p>{props.book.title}</p></td>
            <td><p>{props.book.authors.join(',')}</p></td>
            <td><p>{props.book.description}</p></td>
            <td><p><a href={props.book.infoLink} target='_blank' rel="noreferrer">{props.book.infoLink}</a></p></td>
        </tr>
    );
};