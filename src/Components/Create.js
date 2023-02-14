import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();


        if (email.length === 0) {
            alert("All details are mandatory");
            return;
        }

        if (name.length === 0) {
            alert("All details are mandatory");
            return;
        }
        if (number.length !== 10) {
            alert("invalid numver");
            return;
        }

        axios.post(
            "https://63e88b2b4f3c6aa6e7bf52fb.mockapi.io/crud-mycontact", {
            name: name,
            email: email,
            number: number,
        })
            .then(() => {
                history('/');
            })

    };

    return (
        <>
            <div className="container" style={{marginTop:100}}>
                <h2 >Create</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"> Contact Number</label>
                        <input type="number" className="form-control" onChange={(e) => setNumber(e.target.value)} />
                    </div>



                </form>
                <div className="d-flex justify-content-between">
                    <div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div>
                        <Link to='/'>
                            <button type="submit" className="btn btn-primary" >Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}
