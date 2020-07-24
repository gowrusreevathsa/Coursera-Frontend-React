import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes.js'

class Dishdetail extends Component{

    formatDate(dateString){
        var d = dateString.substring(4, 10);
        return d.concat(', ').concat(dateString.substring(11, 15));
    }

    renderComments(selectedDish){

        var comments; 

        for(var i = 0; i<DISHES["length"]; ++i){
            if(DISHES[i]["name"] == selectedDish["name"]){
                if(DISHES[i]["comments"] == null){
                    return <div></div>
                }
                
                comments = DISHES[i]["comments"].map((comment) => {
                    return(
                        <div key={comment.id}>
                            {comment.comment}
                            <br/><br/>
                            -- {comment.author} , {this.formatDate((new Date(comment.date)).toDateString())}
                            <br/><br/>
                        </div>
                    );
                });
                return (
                    <div>
                        <h4>Comments</h4>
                        <div>{ comments }</div>
                    </div>
                );
            }
        }

        return (
            <div></div>
        )
    }

    render(){

        const selectedDish = this.props.dish;

        if (selectedDish == null){
            return (
                <div></div>
            );
        }

        return (
            // <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={selectedDish.image} />
                            <CardBody>
                                <CardTitle>{selectedDish.name}</CardTitle>
                                <CardText>{selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish)}
                    </div>
                </div>
            // </div>
        );
    }
}

export default Dishdetail;