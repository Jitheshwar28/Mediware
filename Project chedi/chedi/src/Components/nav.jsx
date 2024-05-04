import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead'; // Import Typeahead from react-bootstrap-typeahead

function NavScrollExample({setSearch}) {
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // List of available elements for search
  const options = [
    'aloe vera',
    'turmeric',
    'ginseng',
    'lavender',
    'rosemary',
    'lemon balm',
    'chamomile',
    'peppermint',
    'Tecoma', 'Malabar_Nut', 'Curry', 'Drumstick', 'Tomato', 'Lemongrass', 'Ginger', 'Chilly', 'Nelavembu', 'Raddish', 'Nooni', 'Jackfruit', 'Turmeric', 'Palak(Spinach)', 'Honge', 'Mint', 'Pumpkin', 'Lantana', 'Jasmine', 'Castor', 'Papaya', 'Sapota', 'Kambajala', 'Kasambruga', 'Badipala', 'Neem', 'Guava', 'Bringaraja', 'kamakasturi', 'Coriender', 'Coffee', 'ashoka', 'Tulsi', 'Pea', 'Seethapala', 'Caricature', 'Citron lime (herelikai)', 'Catharanthus', 'Astma_weed', 'Pepper', 'Balloon_Vine', 'Hibiscus', 'Bhrami', 'Pomoegranate', 'Aloevera', 'Chakte', 'Eucalyptus', 'Beans', 'Insulin', 'camphor', 'Padri', 'Parijatha', 'Marigold', 'Taro', 'Spinach1', 'Bamboo', 'Amla', 'Arali', 'kepala', 'Globe Amarnath', 'Ganigale', 'Lemon', 'Common rue(naagdalli)', 'Ekka', 'Betel', 'Tamarind', 'Henna', 'Gasagase', 'Doddpathre', 'Malabar_Spinach', 'Rose', 'Amruthaballi', 'Kohlrabi', 'Nerale', 'Mango', 'Onion', 'Thumbe', 'Sampige', 'Ganike', 'Seethaashoka'
  ];

  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearch(selected);
  }

  const handleInputChange = (input) => {
    setInputValue(input);
    setShowSuggestions(input.length > 0);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#E5E483' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Mediware</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Typeahead
              id="search"
              onChange={setSelected}
              selected={selected}
              options={options}
              placeholder="Search"
              onInputChange={handleInputChange}
              autoFocus
              filterBy={(option) => {
                if (!inputValue) return false;
                const inputValueLowerCase = inputValue.toLowerCase();
                return option.toLowerCase().startsWith(inputValueLowerCase);
              }}
              emptyLabel="No matches found"
              show={showSuggestions}
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
