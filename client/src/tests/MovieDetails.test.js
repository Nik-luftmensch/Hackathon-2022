import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { getMoviesQuery } from "../queries/queries"
import {MovieDetails} from "../components/MovieDetails"



const data = {
    movies : [
        {name},{}
    ]
}

const mocks = [
  {
    request: {
      query: getMoviesQuery,
    },
    result: {
      data: {
        movies: { id: "1", name: "Buck" },
      }    
    }
  }
];


it ("should render Movies", async() => {
        render(
      <MockedProvider data = {[mocks]}>
        <MovieDetails data/>
      </MockedProvider>
        );
        console.log(mocks)
})