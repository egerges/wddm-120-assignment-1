import './App.css';

import React, { useEffect, useState } from 'react';
// import { useRef } from 'react';
// import Pagination from 'react-bootstrap/Pagination';
import { Backdrop, CircularProgress } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Api from './api/Api';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // const [page, setPage] = useState(1);

  const apiFunc = Api();
  
  useEffect(() => {
    let apiItems = [];
    async function getData() {
      // apiFunc.getThisYearMovies(page)
      apiFunc.getThisYearMovies(1)
      .then( response => {
        let data = response.results;
        for(let i=0; i<data.length; i++) {
          apiFunc.getMovieDetails(data[i].imdb_id)
          .then(itemResponse => {
            apiItems.push(itemResponse.results);
            console.log(itemResponse.results);
            if(i === (data.length - 1)) {
              setItems(apiItems);
              setIsLoaded(true);
            }
          })
          .catch(err => {
            setError(err);
          });
        }
      })
      .catch(err => {
        setError(err);
        setIsLoaded(true);
      });
    }

    getData();

    // document.querySelectorAll('.page-item').forEach(item => {
    //   item.addEventListener('click', () => {
    //     setIsLoaded(false);
    //     getData();
    //   });
    // });
  }, []);

  // let paginationItems = [];
  // for (let number = 1; number <= 5; number++) {
  //   paginationItems.push(
  //     <Pagination.Item key={number}
  //       active={number === 1}
  //       onClick={
  //         (e) => {
  //           let i = 0;
  //           setItems([]);
  //           document.querySelectorAll('.page-item').forEach(item => {
  //             i++;
  //             if(item.classList.contains('active')) {
  //               item.classList.toggle('active');
  //               item.setAttribute('active', number === page);
  //               setPage(i);
  //             }
  //           });
  //           e.currentTarget.parentElement.classList.toggle('active');
  //           e.currentTarget.parentElement.setAttribute('active', number === page);
  //           console.log(e.currentTarget.parentElement)
  //         }
  //       }>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }

  return (
    <div className="App">
      {
        error && (
          <div>Error: {error.message}</div>
        )
      }

      {
        !isLoaded && (
          <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={!isLoaded}
            >
              <CircularProgress color="inherit" />
          </Backdrop>
        )
      }

      { 
        items && (
          <>
            <Container fluid id='moviesList'>
              {
                items.map(item => (
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${item.banner}`} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      {/* <Card.Text>{item.description}</Card.Text> */}
                      <Card.Text>{item.plot}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              }
            </Container>
            {/* <Pagination>{paginationItems}</Pagination> */}
          </>
        )
      }
    </div>
  );
}

export default App;
