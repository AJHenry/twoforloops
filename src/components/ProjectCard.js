import React, { Component } from 'react';

export class ProjectCard extends Component {
    render() {
        return (
            <div class="text-center">
                <h3 ><strong className="color-red">{this.props.title}</strong></h3>
                <h4 >{this.props.description}</h4>
                <p >Source Code: <a  className="color-red" href={this.props.url}>{this.props.url}</a></p>
            </div>
        )
    }
}