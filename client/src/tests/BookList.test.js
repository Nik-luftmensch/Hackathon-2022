// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import { MockedProvider } from "@apollo/client/testing";
// import { getBooksQuery } from "../queries/queries"
// import {displayBooks} from "../components/BookList"

// const mocks = [
//   {
//     request: {
//       query: getBooksQuery,
//     },
//     result: {
//       data: {
//         books: { id: "1", name: "Buck" }
//       }
//     }
//   }
// ];

// // it("renders without error", async () => {
// //     render(
// //       <MockedProvider mocks={mocks} addTypename={false}>
// //         <book name="Buck" />
// //       </MockedProvider>
// //     );
// //     expect(await screen.findByText("Loading...")).toBeInTheDocument();
// //   });
  
//   it("should render Books", async () => {
//     const bookMock = {
//       request: {
//         query: getBooksQuery,
//         variables: { name: "Buck" }
//       },
//       result: {
//         data: { books: { id: 1, name: "Buck" } }
//       }
//     };
//     render(
//       <MockedProvider mocks={[bookMock]} addTypename={false}>
//         <displayBooks name="Buck" />
//       </MockedProvider>
//     );
//     console.log(screen)
//   });