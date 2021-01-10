import ContentModal from './ContentModal'
import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import './App.css'

const data = [
  ['Romans 1', 'We discussed in detail on all of Romans 1 on 10th Jan 2020.', 
  ['God makes plain His eternal power and divine nature in creation',
  'Men reject God’s status and worship creation',
  'God promises the gospel through Scripture',
  'God fulfils His promise in His Son (Jesus), and thus reveals His righteousness',
  'Righteous men live by faith in His Son',
  'God displays His wrath by giving them over into their sin',
  'God denounced and His glory exchanged with idols',
  'God’s natural order distorted',
  'God’s moral law broken by evil'], 
  'Romans1.jpg']
]

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <br/>
      <h1>Welcome to 7S!</h1>
      <br/><br/>
      {data.map((element,i)=><Jumbotron key={i}>
        <h1>{element[0]}</h1>
        <p>
          {element[1]}
        </p>
        <p>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Details
          </Button>
          <ContentModal
            title = {element[0]}
            summary = {element[1]}
            content = {element[2]}
            img = {element[3]}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </p>
      </Jumbotron>)}
    </div>
  );
}

export default App;
