import React from 'react';

class AccordianItem extends React.Component {
    render() {
        let returnElement; 

        if(this.props.lastIndex == this.props.id) {
            returnElement = <li><p>{this.props.content}</p><button id={`${this.props.id}`} onClick={this.props.handleClick}>{this.props.title}</button></li>;
        } else {
            returnElement = <li><button id={`${this.props.id}`} onClick={this.props.handleClick}>{this.props.title}</button></li>;
        } return returnElement;
    }
}

class Accordian extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastIndex : null
        }
    }

    handleClick = (event) => {
        this.setState({
            lastIndex : event.target.getAttribute('id')
        }, () => console.log('testing index', this.state.lastIndex))
    }

    render() {
        let accordianItems = this.props.sections.map((items, i) => {
        return <AccordianItem lastIndex={this.state.lastIndex} handleClick={this.handleClick} key={i} id={i} title={items.title} content={items.content}/>
        });
        console.log(accordianItems);
        return (
            <div>
                <ul>
                {accordianItems}
                </ul>
            </div>
)}

}





export default Accordian