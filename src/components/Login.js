import React, { useState ,} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_image from './Sign_image';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history = useNavigate();

    const [InputValue, SetInputValue] = useState({
        email: "",
        password: ""
    });

    const [data, setData] = useState([]);

    console.log(InputValue);

    const getData = (e) => {
        //console.log(e.target.value)

        const { value, name } = e.target;
        //console.log(value , name);

        SetInputValue(() => {
            return {
                ...InputValue,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault();

        const getuserarray = localStorage.getItem("userdata")
        console.log(getuserarray);

        const { email,password } = InputValue;
        if (email === '') {
            alert("Email Field Was Required....")
        } else if (!email.includes("@")) {
            alert("Please Enter A Valid Email Address...")
        } else if (password === '') {
            alert("Please Enter Your Password...")
        } else if (password.length < 5) {
            alert("PassWord Sholud Be Greater Than Five...")
        } else {
             
            if(getuserarray && getuserarray.length){
                const userdata = JSON.parse(getuserarray);
                const userlogin = userdata.filter((el ,k) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length === 0) {
                    alert("Invalid Details...")
                }else {
                    console.log("login Success..")

                    localStorage.setItem("user_login" , JSON.stringify(userlogin))
                    
                    history("/details")
                }
            }
           
        }
    }
    return (
        <>
            <div className='container mt-3' >
                <section className='d-flex justify-content-between'>

                    <div className='left_data mt-3' style={{ Width: "100%" }}>
                        <h3 className='text-center col-lg-20'>Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-20" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-20" controlId="formBasicPassword">
                                <Form.Control type="password" onChange={getData} name='password' placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-30' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        

                    </div>
                    <Sign_image />
                </section>
            </div>

        </>
    )
}

export default Login