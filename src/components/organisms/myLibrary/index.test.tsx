import { fireEvent, render, screen } from "@testing-library/react";
import MyLibraryTemplate from ".";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "@testing-library/jest-dom";
const mockedAxios = axios as jest.Mocked<typeof axios>;
jest.mock("axios");
const data=[{
      "src": "assets/livesOfStoics.png",
      "cardName": "Lives of the Stoics",
      "authorName": "Ryan Holiday, Stephen Hansel",
      "timeStamp": "13-minute read",
      "id": 8,
      "isread": false,
      "reads": "",
      "status": true,
      "startedBook": true,
      "just": false,
      "audio": false
    },
    {
      "src": "assets/lovingYourBusiness.png",
      "cardName": "Loving Your Business",
      "authorName": "Debbie King",
      "timeStamp": "13-minute read",
      "id": 9,
      "isread": false,
      "reads": "",
      "status": false,
      "startedBook": false,
      "just": false,
      "audio": false
    },
{
      "src": "assets/lovingYourBusiness.png",
      "cardName": "Loving Your Business",
      "authorName": "Debbie King",
      "timeStamp": "13-minute read",
      "id": 9,
      "isread": false,
      "reads": "",
      "status": false,
      "startedBook": false,
      "just": false,
      "audio": false
    }]

const renderFunction=()=>{
    render(
        <BrowserRouter><MyLibraryTemplate book={data} setData={undefined}></MyLibraryTemplate></BrowserRouter>
    )
}

it('card items',()=>{
    renderFunction();
    const grids=screen.getAllByTestId("grid");
    grids.forEach((data)=>{
        expect(data).toBeInTheDocument()
    })

})


it('grid should be navigated to bookdetails on click', ()=>{
    mockedAxios.get.mockResolvedValue(Promise.resolve(Response));

    renderFunction();
    const gridElement= screen.getAllByTestId("grid");
    gridElement.forEach((data)=>{
        fireEvent.click(data);
    expect(window.location.pathname).toBe("/enterpreuner/bookdetails");
    })  
})


it('should navigate to MyLIbrary page',()=>{
    renderFunction();
    const entrepreneurship=screen.getByRole('button',{name:/currently reading/i})
    fireEvent.click(entrepreneurship);
})


it('should navigate to  page',()=>{
    renderFunction();
    const entrepreneurship=screen.getByRole('button',{name:/finished/i})
    fireEvent.click(entrepreneurship);
})