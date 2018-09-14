import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ButtonToHome } from '../components/ButtonToHome';

const API_KEY = '644c4d41'

export class Detail extends Component {

    static propTypes = {
        match : PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }

    state = {
        movie: []
    }

    _fetchMovie = (id) => {

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(resp => resp.json())
            .then( movie => {
                console.log(movie) 
                this.setState({movie})
            })
    }

    componentDidMount() {
        console.log(this.props)
        const {id} = this.props.match.params
        this._fetchMovie(id)
    }

    render() {

        const { Title, Poster, Actors, Metascore, Plot} = this.state.movie

        return (
            <div>
                <ButtonToHome />
                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <span> {Metascore} </span>
                <p> {Plot} </p>
            </div>
        )
    }
}