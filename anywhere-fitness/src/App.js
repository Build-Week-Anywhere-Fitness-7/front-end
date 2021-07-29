import React, { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import FitHome from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Classes from './components/Classes'
import CreateAccount from './components/CreateAccount'
import './App.css';
import RealEstateHeader from './components/real-estate-header/RealEstateHeader';
import RealEstateListing from './components/real-estate-listing/RealEstateListing';
import Footer from './components/Footer'

export default function App() {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const getClasses = () => {
      axios
        .get(`http://localhost:4000/classes/`)
        .then(res => {
          setClassList(res.data)
          console.log(res.data)
        })
    }
    getClasses()
  }, [])
  const initialState = [
    {
      title: 'Anywhere fitness',
      location: 'New York',
      price: 5000,
      id: '109',
    },
    {
      title: 'Anywhere fitness',
      location: 'Los Angeles',
      price: 30000,
      id: '108',
    },
    {
      title: 'Anywhere fitness',
      location: 'New York',
      price: 500000,
      id: '107',
    },
    // {
    //   title: 'Anywhere fitness',
    //   location: 'Los Angeles',
    //   price: 50000,
    //   id: '106',
    // },
    // {
    //   title: 'Anywhere fitness',
    //   location: 'New York',
    //   price: 500000,
    //   id: '105',
    // },
  ];
  const [query, setQuery] = useState('');
  const [listings, setListings] = useState(initialState);
  const [filteredListings, setFilteredListings] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [currentListing, setCurrentListing] = useState({});
  const currentListings = isFiltered ? filteredListings : listings;

  const handleQueryChange = (e) => {
    if (e.target.value) {
      setIsFiltered(true);
    } else setIsFiltered(false);

    setQuery(e.target.value);
    // filter(e.target.value);
  };

  const handleEditClick = (e) => {
    const item = listings.filter((listing) => listing.id === e.target.value);
    setIsEdit(true);
    setCurrentListing(item[0]);
    setTitle(item[0].title);
    setPrice(item[0].price);
    setLocation(item[0].location);
  };

  const handleDeleteClick = (e) => {
    const newListings = listings.filter(
      (listing) => listing.id !== e.target.value
    );
    setListings(newListings);
  };

  const clearInput = () => {
    setIsEdit(false);
    setTitle('');
    setPrice('');
    setLocation('');
    setCurrentListing({});
  };

  const handleAddOrEditClick = () => {
    if (isEdit) {
      const newListing = {
        title,
        location,
        price: +price,
        id: currentListing.id,
      };
      editCurrentListing(newListing);
    } else {
      const newListing = {
        title,
        location,
        price: +price,
        id: Math.floor(Math.random() * 101).toLocaleString(),
      };
      addListing(newListing);
    }
    clearInput();
  };

  const editCurrentListing = (newListing) => {
    setListings(
      listings.map((listing) =>
        listing.id === currentListing.id ? newListing : listing
      )
    );
  };

  const addListing = (newListing) => {
    setListings([newListing, ...listings]);
  };

  // const filter = (query) => {
  //   if (query) {
  //     const filteredListings = listings.filter(
  //       (listing) => listing.location === query
  //     );
  //     setFilteredListings(filteredListings);
  //   } else setFilteredListings([]);
  // };

  useEffect(() => {
    if (query) {
      const filteredListings = listings.filter(
        (listing) => listing.location === query
      );
      setFilteredListings(filteredListings);
    } else setFilteredListings([]);
  }, [listings, query]);

  return (

    <> 
     
    <div className="header">
      <nav id="nav">
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/SignUp'>Sign Up</Link>
        <Link to='/Profile'>Profile</Link>
        <Link to={''}>Logout</Link>
      </nav>
      <title>Anytime Fitness</title>
      
      
      <div className="app">
      <RealEstateHeader
        query={query}
        handleQueryChange={handleQueryChange}
        isEdit={isEdit}
        title={title}
        setTitle={setTitle}
        price={price}
        setPrice={setPrice}
        location={location}
        setLocation={setLocation}
        clearInput={clearInput}
        handleAddOrEditClick={handleAddOrEditClick}
      />
      {currentListings.length === 0 && (
        <h2 style={{ paddingTop: 10, textAlign: 'center' }}>No Results</h2>
      )}
      <RealEstateListing
        listings={currentListings}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
    </div>
    

    <Switch>
      <Route path='/classes'>
        <Classes workouts={ classList }/>
      </Route>
      <Route path='/CreateAccount'>
        <CreateAccount />
      </Route>
      <Route path='/SignUp'>
        <SignUp />
      </Route>
      <Route path='/Login'>
        <Login />
      </Route>
      <Route path='/'>
        <FitHome />
      </Route>
    </Switch>
    <Footer></Footer>
    </>
    
  )
}