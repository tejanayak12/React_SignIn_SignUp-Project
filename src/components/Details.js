import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



const Details = () => {

  const [logindata, SetloginData] = useState([]);
  console.log(logindata);

  const history = useNavigate();
  
  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);
  //console.log(todayDate);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const Birthday = () => {
    const getUser = localStorage.getItem("user_login");

    if (getUser && getUser.length) {
      const user = JSON.parse(getUser)
      //console.log(user);
      SetloginData(user)



      const usebirth = logindata.map((el, k) => {
        return el.date === todayDate
      });

      if (usebirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000)
      }
    }
  }

  const userlogout = () => {
    localStorage.removeItem("user_login")
      history("/");
  }

  useEffect(() => {

    Birthday()

  }, [])

  return (
    <>
      {
        logindata.length === 0 ? "error" :
          <>
            <h1>Details-Page</h1>
            <h1>{logindata[0].name}</h1>
            <Button onClick={userlogout}>LogOut</Button>

          {
            logindata[0].date === todayDate ? 
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{logindata[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Wish U Happy Birthday! Greetings From Teja-Nayak</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>:""
          }
          
          </>
      }
    </>
  )
}

export default Details