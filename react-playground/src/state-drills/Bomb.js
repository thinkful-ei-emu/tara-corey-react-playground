import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
            message : 'tick'
        };
        //console.log(this.state.count);
    }
    
    componentDidMount = () => {
        this.interval = setInterval(() => {
           let newMessage;
           if(this.state.count === 7) {
               newMessage = 'BOOM!';
            } else if(this.state.count % 2 === 0) {
                newMessage = 'tock';
            } else if (this.state.count % 2 !== 0) {
                newMessage = 'tick';
            } 
                   
        this.setState({
            count : this.state.count+1,
            message : newMessage
        });
        if(this.state.count === 8){
            clearInterval(this.interval);
        }
        },1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    render() {
    return (
    <div>
        <p>{this.state.message}</p>
    </div>
    );
    }
}

export default Bomb;