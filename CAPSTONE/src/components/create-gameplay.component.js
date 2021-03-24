import React, {Component} from 'react';

export default class CreateGameplay extends Component {

    constructor(props) {
        super(props);

//(4) To bind methods to the {this} object in order to access the state object
        this.onChangeGameplayTitle = this.onChangeGameplayTitle.bind(this);
        this.onChangeGameplayConsole = this.onChangeGameplayConsole.bind(this);
        this.onChangeGameplayRating = this.onChangeGameplayRating.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

//(1) Create state with propeties
        this.state = {
            gameplay_title: '',
            gameplay_console: '',
            gameplay_rating: '',
            gameplay_completed: false
        }
    }

//(2) Create Methods for updating state 
    onChangeGameplayTitle(e) {
        this.setState({
            gameplay_title: e.target.value
        });
    }

    onChangeGameplayConsole(e) {
        this.setState({
            gameplay_console: e.target.value
        });
    }

    onChangeGameplayRating(e) {
        this.setState({
            gameplay_rating: e.target.value
        });
    }

    onSubmit(e) {
// To get rid of default submit of browser when HTML form is submitted
        e.preventDefault();

// Submit logic will go here to replace console log 
        console.log(`Form submitted:`);
        console.log(`Gameplay Title: ${this.state.gameplay_title}`);
        console.log(`Gameplay Console: ${this.state.gameplay_console}`);
        console.log(`Gameplay Rating: ${this.state.gameplay_rating}`);
        console.log(`Gameplay Completed: ${this.state.gameplay_completed}`);

//(3) reset state once form is submitted
        this.setState({
            gameplay_title: '',
            gameplay_console: '',
            gameplay_rating: '',
            gameplay_completed: false
        })
    }

    render() {
        return (
// JSX code needed to output form 
            <div style={{ marginTop: 20 }}>
                <h3>Add Game to List</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control"
                            value={this.state.gameplay_title}
                            onChange={this.onChangeGameplayTitle} />
                    </div>
                    <div className="form-group">
                        <label>Console: </label>
                        <input type="text" className="form-control"
                            value={this.state.gameplay_console}
                            onChange={this.onChangeGameplayConsole} />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio"
                                name="ratingOptions" id="ratingPoor" value="Poor"
                                checked={this.state.gameplay_rating === 'Poor'}
                                onChange={this.onChangeGameplayRating} />
                            <label className="form-check-label">Poor</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio" name="ratingOptions" id="ratingOkay" value="Okay"
                                checked={this.state.gameplay_rating === 'Okay'}
                                onChange={this.onChangeGameplayRating} />
                            <label className="form-check-label">Okay</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio" name="ratingOptions" id="ratingGreat" value="Great"
                                checked={this.state.gameplay_rating === 'Great'}
                                onChange={this.onChangeGameplayRating} />
                            <label className="form-check-label">Great</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Gameplay" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}