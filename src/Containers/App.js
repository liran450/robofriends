import React, {Component} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary'

class App extends Component {
	constructor() {
		super()
		this.state = {
		robots: [],
		searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=>
			response.json())
			.then(users => this.setState({robots: users}));
	}
   
	changeSearch = (event) => {
	this.setState({searchfield: event.target.value}) 
	console.log(this.state.searchfield);
	}

	render (){
	const { robots, searchfield } = this.state; 
	const filteredRobot = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	});
	return !robots.length ?
	<h1 className= 'tc'>Loading</h1> :
	(
			<div className= 'tc'>
				<h1 className= 'f2'>RoboFriends</h1>
				<SearchBox searchBar={this.changeSearch} />
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobot}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			)
	}
}

export default App