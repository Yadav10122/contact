import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {

    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const history = useNavigate();

    const updatecontact = (e) => {
        e.preventDefault();
        axios.put(`https://63e88b2b4f3c6aa6e7bf52fb.mockapi.io/crud-mycontact/${id}`, {
            name: name,
            email: email,
            number: number
        })
            .then(() => {
                history('/');
            })
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setNumber(localStorage.getItem('number'));

    }, [])

    return (
        <>
            <div className="container">
                <h2 >Update</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"> Contact Number</label>
                        <input type="number" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="mb-3">
                            <Link to="/">
                                <button type="Back" className="btn btn-primary" >Back</button>
                            </Link>

                        </div>
                        <div className="mb-3">

                            <button type="Update" className="btn btn-primary" onClick={updatecontact}>Update</button>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
