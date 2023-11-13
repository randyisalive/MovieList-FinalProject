function TableTopMovies() {
  return (
    <div className="table-responsive w-100 ">
      <table className="table caption-top">
        <caption>Top Movies</caption>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img
                src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                alt=""
                className="img img-thumbnail"
                width="80"
              />
            </td>
            <td className="flex-column">
              <span>Sousou no Frieren</span>
              <br />
              <span>TV,28 eps, scored 8.94, 199,931 members</span>
            </td>
            <td>
              <a href="">add</a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <img
                src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                alt=""
                className="img img-thumbnail"
                width="80"
              />
            </td>
            <td>Thornton</td>
            <td>
              {" "}
              <a href="">add</a>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <img
                src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                alt=""
                className="img img-thumbnail"
                width="80"
              />
            </td>
            <td>the Bird</td>
            <td>
              {" "}
              <a href="">add</a>
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              <img
                src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                alt=""
                className="img img-thumbnail"
                width="80"
              />
            </td>
            <td>the Bird</td>
            <td>
              {" "}
              <a href="">add</a>
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              <img
                src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI"
                alt=""
                className="img img-thumbnail"
                width="80"
              />
            </td>
            <td>the Bird</td>
            <td>
              {" "}
              <a href="">add</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableTopMovies;
