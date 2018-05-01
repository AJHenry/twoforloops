import React, { Component } from 'react';
import Slider from 'react-slick';

export class ProjCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                
            ]
        };
        /* Format 
        project : [
            {
                id: 0,
                title: "Title",
                description: "Desc"
            }
        ]
        */
        this.getNextNum = this.getNextNum.bind(this);
        this.eachProject = this.eachProject.bind(this);
        this.add = this.add.bind(this);
    }
    componentWillMount(){
        console.log('mounting');
        var self = this;
   
        fetch(`https://api.github.com/users/${this.props.username}/repos`)
            .then(response=> response.json())
            .then(json => json
                .forEach(project => self.add(project)));
        
    }
    add(projectJSON){
        console.log('New Item');
        console.log(projectJSON);
        this.setState(prevState=> ({
            projects : [
                ...prevState.projects,
                {
                    id : this.getNextNum(),
                    title : projectJSON['name'],
                    description : projectJSON['description'],
                }
            ]
        }));
    }
    getNextNum() {
        this.uniqueID = this.uniqueID || 0;
        return this.uniqueID++;
    }
    eachProject(project, i){
        return (
            <div>
                <h3 class="text-center">{project.title}</h3>
            </div>
        );
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {this.state.projects.map(this.eachProject)}
            </Slider>
        );
    }
}