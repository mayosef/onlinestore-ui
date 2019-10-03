import React from 'react';
import UserService from '../services/user.service';
import Avatar from './Avatar';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        UserService
            .me()
            .then(res => res.json())
            .then(user => {
                this.setState({
                    user:user  
                })
            })
    }
    updateProfile() {
        this.setState({})
    }

    render() {
        return (
            <div className="container">
                <div className="profile">
                    <form className="form-group">
                        <div>
                            <h2>Welcome {this.state.user.name}!</h2>

                        </div>
                        <div>
                        <Avatar />
                        </div>
                        <div>
                            Email address:<input value={this.state.user.email} type="text" className="form-control" />
                        </div>
                        <div>
                            age:<input value={this.state.user.age} type="text" className="form-control" />
                        </div>
                        <div>
                            <button onClick={this.updateProfile} type="submit" className="btn btn-primary" >Update</button>
                        </div>
                    </form>
                </div>
            </div>
                
        );
    }
}

export default Profile;