import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default function Navbar() {
    const [data, setData] = useState([]);
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);


    const getData = async () => {
        await axios.get('https://63e88b2b4f3c6aa6e7bf52fb.mockapi.io/crud-mycontact')

            .then((res) => {
                setData(res.data);
            })
        setLoading(false)
    }
    
    const handledelete = async (id) => {
        setLoading(true)
        await axios.delete(
            `https://63e88b2b4f3c6aa6e7bf52fb.mockapi.io/crud-mycontact/${id}`
        )
            .then(() => {
                getData();
            })
        setLoading(false)
    }


    useEffect(() => {
        getData()
    }, [])

    const setToLocalStorage = (id, name, email, number) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("number", number);
    }
    const inputhandler = (e) => {
        setText(e.target.value.toLowerCase());
    }

    return (
        <>





            <div className="container " style={{ marginTop: 100 }}>

                <div className="d-flex  justify-content-between m-2">
                    <h2>My Contact List</h2>

                    <div className="mb-3">

                        <input type="search" placeholder='Search here' className="form-control" aria-describedby="emailHelp" onChange={inputhandler} />

                    </div>

                    <Link to='/create'>

                        <button className="btn-success" >Create New</button>

                    </Link>
                </div>


                <center>
                    {loading && <Spinner />}
                </center>

                <div className="row d-flex justify-content-center align-items-center">
                    {

                        data.filter((el) => {
                            if (el === '') {
                                return el;
                            }
                            else {
                                return (
                                    el.name.toLowerCase().includes(text) || el.email.toLowerCase().includes(text)
                                )
                            }
                        })

                            .map((ele) => {
                                return (
                                    <>

                                        <div className="card mx-3 my-3" style={{ width: "18rem" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">{ele.name}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{ele.number}</h6>
                                                <p className="card-text">{ele.email}</p>
                                                <div className="d-flex justify-content-around">
                                                    <div>
                                                        <Link to='/update'>
                                                            <button className="btn-success" onClick={() => setToLocalStorage(ele.id, ele.name, ele.email, ele.number)}>Update</button>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <button className="btn-danger" onClick={() => handledelete(ele.id)}>Delete</button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </>
                                )
                            })
                    }
                </div>


            </div>



        </>
    )
}
