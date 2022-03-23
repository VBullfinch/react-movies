import React from 'react'

class Search extends React.Component {

    state ={
        search:'',
        type:'all',

    }
    handleKey = (event) => {
        if (event.key==='Enter'){
            this.props.searchMovie(this.state.search,this.state.type)
    }}
    handleFilter=(event)=>{
        this.setState(()=>({type:event.target.dataset.type}),()=>{
            this.props.searchMovie(this.state.search,this.state.type)
        })
    }
    render(){
        return (
            <div className="row">
          <div className="input-field">
            <input 
            placeholder="search"  
            type="search" 
            className="validate"
            value={this.state.search}
            onChange={(e)=>this.setState({search:e.target.value})}
            onKeyDown={this.handleKey}
            />
            <button
            className="btn search-btn"
            onClick={()=>{this.props.searchMovie(this.state.search,this.state.type)}}
            >Search</button>
          </div>
          <div>
          <form action="#">
        <p>
          <label>
            <input 
            name="type"
            type="radio"
            checked={this.state.type==='all'}
            data-type="all"
            onChange={this.handleFilter}
             />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input name="type"
            type="radio"
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type==='movie'}
            />
            <span>Movie</span>
          </label>
        </p>
        <p>
          <label>
            <input 
            name="type" 
            type="radio" 
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type==='series'}
            />
            <span>Series</span>
          </label>
        </p>
      </form>
      </div>
      </div>
        )
    }
}
export default Search