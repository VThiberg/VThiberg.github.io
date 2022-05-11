import React, { Component } from 'react';
import school from '../images/school.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div >
                    <img src={school} className="Image-header" alt="school" />
                </div>
            </div>
        )
    }
}