import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 p-0 fixed-top"  >

                <div className="container-fluid" style={{ backgroundColor: "aqua", width: "100%" }}>
                    <Link className="navbar-brand" to="/"><i className="fa-sharp fa-solid fa-address-book" style={{ fontSize: 25, cursor: "pointer", padding: 8 }}></i> My Contact</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>


                        </ul>

                    </div>
                </div>

            </nav>

        </div>
    )
}
