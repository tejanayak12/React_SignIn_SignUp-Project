import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_image from './Sign_image';


const Home = () => {

    const [InputValue, SetInputValue] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    });

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

        const { name, email, date, password } = InputValue;

        if (name === '') {
            alert("Name Field Was Required...")
        } else if (email === '') {
            alert("Email Field Was Required....")
        } else if (!email.includes("@")) {
            alert("Please Enter A Valid Email Address...")
        } else if (date === '') {
            alert("date Field Is Required...")
        } else if (password === '') {
            alert("Please Enter Your Password...")
        } else if(password.length < 5) {
            alert("PassWord Sholud Be Greater Than Five...")
        }else {
            console.log("The Data Shared By U With us was Succes...");
        }
    }

    return (
        <div className='container mt-3' >
            <section className='d-flex justify-content-between'>

                <div className='left_data mt-3' style={{ Width: "100%" }}>
                    <h3 className='text-center col-lg-20'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-20" controlId="formBasicEmail">
                            <Form.Control type="Text" name='name' onChange={getData} placeholder="Enter Your-Name" />
                            <Form.Text className="text-muted">
                                We'll never share your Personal-Details with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-20" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />

                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-20" controlId="formBasicEmail">
                            <Form.Control onChange={getData} name='date' type="date" />

                        </Form.Group>


                        <Form.Group className="mb-3 col-lg-20" controlId="formBasicPassword">
                            <Form.Control type="password" onChange={getData} name='password' placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" className='col-lg-30' onClick={addData} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account Pls <span>SignIn</span></p>

                </div>
                <Sign_image />


            </section>
        </div>
    )
}

export default Home