import { Component } from "react";
import image from './1.svg'

export class MyList extends Component {
    state = {
        userInput: '',
        myList: []
    };

    onChangeEvent = (e) => {
        this.setState({ userInput: e });
    };

    addItem = (input) => {
        if (input === "") {
            alert ("Please, enter text")
        } else{
            let listArray = this.state.myList;
            listArray.push(input);
            this.setState({ myList: listArray, userInput: "" })
        }
    };

    deleteItem = () => {
        let listArray = this.state.myList;
        listArray = [];
        this.setState({ myList: listArray})
    };

    crossedWord = (event) => {
        const li = event.target;
        li.classList.toggle('crossed')
    };

    onFormSumbit = (e) => {
        e.preventDefault()
    };

    render() {
        return (
            <div className="main-section">
                <form onSubmit={ this.onFormSumbit }>
                <div className="container">
                    <h1>To do list</h1>
                    <img src={ image } width="350px" alt="note"/>
                </div>
                <div className="container">
                    <input type="text"
                    placeholder="Type here..."
                    onChange={ (e) => this.onChangeEvent(e.target.value) }
                    value={ this.state.userInput }/>
                </div>
                <div className="container">
                    <button onClick={ () => this.addItem(this.state.userInput) } className="btn">Add</button>
                </div>
                <div className="container">
                    <button onClick={ () => this.deleteItem() } className="btn">Delete</button>
                </div>
                <ul className="container">
                    { this.state.myList.map((item, index) => (
                    <li onClick={ this.crossedWord } key={ index }>
                    { item }
                    </li>
                )) }
                </ul>
                </form>
            </div>
        )
    }
}




