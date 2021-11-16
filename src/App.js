import { useState } from 'react';
import Menu from './Components/Menu';
import Button from './Components/Button';
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate';

const movies = [
  {
    id: '1',
    url: "https://urlz.fr/gNBi",
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    url: "https://urlz.fr/gNXP",
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    url: "https://urlz.fr/gNBg",
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    url: "https://urlz.fr/gNY2",
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    url: "https://urlz.fr/gNBk",
    category: 'Drame',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    url: "https://urlz.fr/gNY9",
    category: 'Thriller',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    url: "https://urlz.fr/gNY9",
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    url: "https://urlz.fr/gNYL",
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    url: "https://images-na.ssl-images-amazon.com/images/I/81sOq0nCTTL._SL1425_.jpg",
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    url: "https://urlz.fr/gNBo",
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
const allCategories = ['All', ...new Set(movies.map(item => item.category))];


function App() {
  const [menuItem, setMenuItem] = useState([]);
  const [buttons] = useState(allCategories);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 4
  const pagedVisited = pageNumber * itemPerPage

  const deleteTask = (id) => {
    const newList = menuItem.filter((item) => item.id !== id);
    setMenuItem(newList);
  }
  //Filter Function
  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(movies.slice(0, 10));
      return;
    }

    const filteredData = movies.filter(item => item.category === button);
    console.log("Voici filter", filteredData);
    setMenuItem(filteredData)
  }

  const pageCount = Math.ceil(menuItem.length / itemPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  return (
    <div className="App">

      <div className="title">
        <h1>
          Movies
          <span> App</span>
        </h1>
      </div>

      <Button button={buttons} filter={filter} />

      {menuItem && menuItem.slice(pagedVisited, pagedVisited + itemPerPage).map((c) => (
        <Grid key={c.id} item>
          <Menu
            id={c.id}
            title={c.title}
            category={c.category}
            image={c.url}
            likes={c.likes}
            dislikes={c.dislikes}
            deleteItem={deleteTask}
          />
        </Grid>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBttns"}
        previousClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />

    </div>
  );
}

export default App;
