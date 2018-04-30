import React, { Component } from 'react';
import { Element } from 'react-scroll';
import { Fade } from 'react-reveal';
import './Services.css';
import andrew from './assets/andrew.jpg';
import nick from './assets/nick.jpg';

export class ProjCar extends Component {
    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                       
                    </div>
                    <div class="carousel-item">
                       
                    </div>
                </div>
                <a class="carousel-control-prev" href="#services"role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#services" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}