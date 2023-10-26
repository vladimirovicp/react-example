function TableBook(props){

    const {books = Function.prototype} = props;
    return <table className="highlight responsive-table">
        <thead>
            <tr>
                <th>n/n</th>
                <th>author</th>
                <th>country</th>
                <th>language</th>
                <th>pages</th>
                <th>title</th>
            </tr>
        </thead>
        <tbody>
            {
                books.map((item,index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="z-depth-1">{item.author}</td>
                        <td className="z-depth-1">{item.country}</td>
                        <td className="z-depth-1">{item.language}</td>
                        <td className="z-depth-1">{item.pages}</td>
                        <td className="z-depth-1">{item.title}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
}


export {TableBook}