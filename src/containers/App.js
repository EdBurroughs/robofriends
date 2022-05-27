import React from 'react'
import './App.css'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import { requestRobots, setSearchField } from '../actions';
import { connect } from 'react-redux';
import Header from '../components/Header';

//passed to Redux's connect HOF telling it which bit of state this component requires
const StateToProps = (state) =>({
    searchField : state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error
})

//passed to connect to 'wire' this components relevant action types to the store via its reducers
const DispatchToProps = (dispatch) => ({
    onSearchChange : (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots : () => dispatch(requestRobots())
})

class App extends React.Component{

    // const [robots, setRobots] = useState([]);
    // const [searchField, setSearchField] = useState('');

    //useEffect unifies willMount, didMount etc into single API
    //running after render second argument is the dependecy of the effect, telling it when to run
    //empty array here makes useEffect equivalent to componentDidMount
   
    componentDidMount(){
        this.props.onRequestRobots()
    }

    // const onSearchChange = (e) => {
    //     setSearchField(e.target.value)     
    // }
    render(){
       
        const {searchField, onSearchChange, robots, isPending} = this.props // destructured from props provided by Redux
        const filteredRobots = robots.filter( robot =>{
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
        })
        return !robots.length ? <h1>LOADING</h1> :      
                (<div className='tc'> 
                   <Header/>                  
                   <SearchBox searchChange = {onSearchChange} searchField = {searchField} />
                   <Scroll>
                       <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                       </ErrorBoundary>
                   </Scroll>
                </div>)          
    }
}

export default connect(StateToProps, DispatchToProps)(App)