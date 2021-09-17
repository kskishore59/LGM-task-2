import {Component} from 'react'

import { ImUsers } from "react-icons/im";

import ListItem from '../ListItem'

import './index.css'


class Home extends Component{
    state = {usersList: [], isClicked: false}

    componentDidMount(){
        this.getUsersList()
    }
    

    getUsersList = async () => {
        const url = "https://reqres.in/api/users?page=1"
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options)
        const data = await response.json()
        const convertedData = data.data.map((each) => ({
            id: each.id,
            firstName: each.first_name,
            lastName: each.last_name,
            avatar: each.avatar,
            email: each.email
        }))

        if (response.ok === true){
            this.setState({usersList: convertedData})
        }
    }

    onGetClick = () => {
        this.setState({isClicked: true})
    }

    onShowHide = () => {
        this.setState((prev) => ({isClicked: !prev.isClicked}))
    }

    render(){
        const {usersList, isClicked} = this.state

        return(
            <div className="main-container">
                <nav className="nav-container">
                <ImUsers className="logo-icon"/>
                <div>
                    <button type="button" className="nav-button" onClick={this.onGetClick}>
                        Get Users
                    </button>
                    <button className="nav-button" onClick={this.onShowHide}>Show/Hide Users</button>
                </div>
                </nav>
                {isClicked ? (<ul className="list-container">
                    {usersList.map((each) => (
                        <ListItem key={each.id} details= {each}/>
                    ))}
                </ul>) : <p>No Data Found</p>}
            </div>
        )
    }
}


export default Home