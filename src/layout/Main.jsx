import React from 'react'
import Movies from "../components/Movies";
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY=process.env.REACT_APP_API_KEY

class Main extends React.Component{

    state={
        movies:[],
        lading:true,
    }

    componentDidMount(){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search,loading:false}))
    }
    searchMovie=(value,type)=> {
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${value}${type!=='all'? `&type=${type}`:''}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading:false}))
        
      }
    render(){
        const{movies,loading}=this.state;

        return (<main className='container content'>
                 Hello Movies app
                 <Search searchMovie={this.searchMovie}/>
                 {
                     loading ? (
                        <Preloader />
                     ):<Movies movies={movies}/>
                 }
                 
            </main>)
    }
}
export {Main}