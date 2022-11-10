import React from "react";
import "./provinceCard.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ProvincialModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }



const ProvinceCard = (props) =>{
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <div>

        {/* // change setModalShow(false) to true to make it work */}
        <Button variant="link" style={{textDecoration:"none", color:"white"}} onClick={() => setModalShow(false)}>
            <div className={"provincialscard"}>
                <div className={""}>
                    <img className={"col-12 col-md-12 province-image"} src={require('/img' + props.img)} alt={props.name}/>
                </div>

                <div className={"person-details"}>
                    <div class={"person-name"}><p>{props.name}</p></div>
                    <p className={"text-normal year-card-body"}>{props.desc}</p>
                </div>

                <div className={"person-details"}>
                    <p className={"text-normal year-card-body no-space"}>Date: {props.date}</p>
                    <p className={"text-normal year-card-body no-space"}>Location: {props.location}</p>
                </div>
            
            </div> 
        </Button>

            <ProvincialModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                
            />
        </div>
    )
}

export default ProvinceCard;