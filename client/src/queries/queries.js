import { gql } from 'apollo-boost';

const getDirectorsQuery = gql`
    {
        directors {
            name
            id
        }
    }
`


const getMoviesQuery = gql`
    {
        movies{
            name
            id
        }
    }
`

const getMovieQuery = gql`
    query($id:ID){
        movie(id:$id)
        {
            id
            name
            genre
            director{
                id
                name
                age
                movies{
                    name
                    id
                }
            }
        }
    }
`   
const deletMovieMutation = gql`
    mutation($id:ID!){
        removeMovie(id:$id)
        {
            name
        }
    }
` 

const addMovieMutation = gql`
    mutation($name:String!,$genre:String!,$directorId:ID!){
        addMovie(name:$name,genre:$genre,directorId:$directorId)
        {
            name
            id
        }
    }
` 

export {getDirectorsQuery,getMoviesQuery,addMovieMutation,getMovieQuery,deletMovieMutation};