import React, { Component } from 'react';
import { ProjectCard } from './ProjectCard';
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
                    url : projectJSON['url']
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
            <ProjectCard title={project.title} 
                        description={project.description}
                        url={project.url}/>
        );
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 200,
            slidesToShow: 2,
            slidesToScroll: 2
        };
        return (
            <Slider {...settings}>
                {this.state.projects.map(this.eachProject)}
            </Slider>
        );
    }
}