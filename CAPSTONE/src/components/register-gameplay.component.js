import React, { Component } from 'react';

export default class RegisterGameplay extends Component {

    constructor(props) {
        super(props);

        this.onChangeGameplayEmail = this.onChangeGameplayEmail.bind(this);
        this.onChangeGameplayUsername = this.onChangeGameplayUsername.bind(this);
        this.onChangeGameplayPassword = this.onChangeGameplayPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            gameplay_email: '',
            gameplay_username: '',
            gameplay_password: '',
            gameplay_completed: false
        }
    }
    onChangeGameplayEmail(e) {
        this.setState({
            gameplay_email: e.target.value
        });
    }

    onChangeGameplayUsername(e) {
        this.setState({
            gameplay_username: e.target.value
        });
    }

    onChangeGameplayPassword(e) {
        this.setState({
            gameplay_password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Gameplay Username: ${this.state.gameplay_email}`);
        console.log(`Gameplay Username: ${this.state.gameplay_username}`);
        console.log(`Gameplay Password: ${this.state.gameplay_password}`);
        console.log(`Gameplay Completed: ${this.state.gameplay_completed}`);

        this.setState({
            gameplay_email: '',
            gameplay_username: '',
            gameplay_password: '',
            gameplay_completed: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h3>Please Register</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email"
                            className="form-control"
                            value={this.state.gameplay_email}
                            onChange={this.onChangeGameplayEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.gameplay_username}
                            onChange={this.onChangeGameplayUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.gameplay_password}
                            onChange={this.onChangeGameplayPassword}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="REGISTER" className=" btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}