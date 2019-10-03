import React from 'react';


class Avatar extends React.Component {
    constructor(props) {
        super(props);
       
    }
render() {
    return(
        <div>
            <img src="https://avpn.asia/wp-content/uploads/2015/05/empty_profile.png" className="user-avatar"/>
        </div>
    )
}
}

export default Avatar;