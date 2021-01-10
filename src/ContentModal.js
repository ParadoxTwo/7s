import {Modal, Button} from 'react-bootstrap'

export default function ContentModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>{props.summary}</h6>
          <p>
            <ul>
                {props.content.map((point, i)=><li key={i}>{point}</li>)}
            </ul>
            <br/>
            <div style={{textAlign: 'center'}}>
                <img style = {{height:'270px', width: '480px'}} src={"/"+props.img} />
            </div>
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  