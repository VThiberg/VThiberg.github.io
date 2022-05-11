import React, { Component } from 'react'
import { Link } from "react-router-dom"
import EnglishCardImg from '../images/books.jpg';

export default class English extends Component {
    render() {
        return (
            <div>
                <h2> English</h2>
                <div class="container">
                <div class="row justify-content-center">

                    <div class="col-sm-4">
                        <div class="card" >
                            <img class="card-img-top" src={EnglishCardImg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Assignment 1</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/Math/Algebra" class="btn btn-primary">Go to Assignment 1</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card" >
                            <img class="card-img-top" src={EnglishCardImg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Assignment 2</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="Geometry" class="btn btn-primary">Go to Assignment 2</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card" >
                            <img class="card-img-top" src={EnglishCardImg} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Assignment 3</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="Math/Number-theory" class="btn btn-primary">Go to Assignment 3</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

