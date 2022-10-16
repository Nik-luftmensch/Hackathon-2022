const { graphqlHTTP } = require('express-graphql');
const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType,GraphQLString,GraphQLSchema,
GraphQLID,GraphQLInt,GraphQLList,GraphQLNonNull} = graphql;
const Movie = require('../models/movie')
const Director = require('../models/director')
const director = require('../models/director')
const actor = require('../models/actor')
const Actor = require('../models/actor')

// const Reviewers = require('../models/reviewers')
// const Reviews = require('../models/reviews')



const MovieType = new GraphQLObjectType({
    name : 'Movie',
    fields:()=>({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString},
        director:{
            type:DirectorType,
            resolve(parent,args){
                return Director.findById(parent.directorId);
            }
        }
        // actor:{
        //     type:ActorType,
        //     resolve(parent,args){
        //         return Actor.findById(parent.actorId);
        //     }
        // }
        // reviews:{
        //     type:ReviewType,
        //     resolve(parent,args){
        //         return Reviews.findById(parent.reviewId);
        //     }
        // }
    })
})  



const DirectorType = new GraphQLObjectType({
    name : 'Director',
    fields:()=>({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent,args){
                return Movie.find({directorId: parent.id});
            }
        }
    })
})


const ActorType = new GraphQLObjectType({
    name : 'Actor',
    fields:()=>({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent,args){
                return Movie.find({actorId: parent.id});
            }
        }
    })
})



const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        movie:{
            type:MovieType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
               return Movie.findById(args.id);
            }
        },
        director:{
            type:DirectorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Director.findById(args.id);
            }
        },
        actor:{
            type:ActorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Actor.findById(args.id);
            }
        },
        movies:{
            type: new GraphQLList(MovieType),
            resolve(parent,args){
                return Movie.find({});
            }
        },
        directors:{
            type: new GraphQLList(DirectorType),
            resolve(parent,args){
                return Director.find({});
            }
        },
        actors:{
            type: new GraphQLList(DirectorType),
            resolve(parent,args){
                return Actor.find({});
            }
        },

    }
})

const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addDirector:{
            type:DirectorType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent,args){
                let director = new Director({
                    name: args.name,
                    age: args.age
                });
                return director.save();
            }
        },
        addActors:{
            type:ActorType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent,args){
                let actor = new Actor({
                    name: args.name,
                });
                return actor.save();
            }
        },
        addMovie:{
            type:MovieType,
            args:{
                name:{type:new GraphQLNonNull(GraphQLString)},
                genre:{type:new GraphQLNonNull(GraphQLString)},
                directorId:{type:new GraphQLNonNull(GraphQLID)},
                // actorId:{type:new GraphQLNonNull(GraphQLID)},
            },
            resolve(parent,args){
                let movie = new Movie({
                    name: args.name,
                    genre: args.genre,
                    directorId: args.directorId,
                    // actorId: args.actorId
                });
              return  movie.save();
            }
        },
        removeMovie:{
            type:MovieType,
            args:{
                Id:{type:GraphQLID}
            },
            resolve(parent,args){
                return movie.findByIdAndDelete(args.Id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})