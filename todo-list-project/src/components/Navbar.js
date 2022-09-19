import { response } from "express";
import React,{useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Docket.png'
import Axios from "axios"

function Nav() {
  // added use State 
  const [name, setName] = useState("")
  const [listOfusers, setlistOfusers] = useState([])


// Added use Effect stat
  useEffect(() =>{
    // Here is API call
    Axios.get("URI").then((response) =>{
      setlistOfusers(response.data)
    })

  },[])

  const addName = () => {
    Axios.post("backend URI needed here",{
      name,
    }).then((response) => {
      alert("name added")
    });
  }
  return (
      <div className="Nav">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Docket
            </Navbar.Brand>
            <Navbar.Brand >
              Welcome, name
              <form>
                <label>
                  {/* Added name input */}
                  <input type="text" 
                  placeholder="name..." 
                  onChange={(event) =>{setName(event.target.value);}}/>
                </label>
              </form>
            </Navbar.Brand>
          <Navbar.Brand href="#home" >
          </Navbar.Brand>
          </Container>
        </Navbar>
         </div>

  );
}

export default Nav;