import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EntrepreneurOrganism from ".";
import axios from "axios";
import "@testing-library/jest-dom";
import { Input } from "@mui/material";
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
    },{
      "src": "assets/EatBetter.png",
      "cardName": "Eat Better, Feel Better",
      "authorName": "Giada De Laurentiis",
      "timeStamp": "13-minute read",
      "id": 11,
      "isread": true,
      "reads": "1.9k reads",
      "status": true,
      "startedBook": true,
      "just": true,
      "audio": false
    },{
      "src": "assets/doesntHurt.png",
      "cardName": "Doesn’t Hurt to Ask",
      "authorName": "Trey Gowdy",
      "timeStamp": "13-minute read",
      "id": 6,
      "isread": true,
      "reads": "1.9k reads",
      "status": true,
      "startedBook": true,
      "just": false,
      "audio": true
    }]

const renderFunction=()=>{
    render(
        <BrowserRouter>
        <EntrepreneurOrganism book={data} setData={undefined}></EntrepreneurOrganism>
        </BrowserRouter>
    )
}
it('should have grid',()=>{
    renderFunction();
    const gridElement= screen.getAllByTestId("grid");
    gridElement.forEach((data)=>{
        expect(data).toBeInTheDocument()
    })

})

it('grid should be navigated to bookdetails on click', ()=>{
    mockedAxios.get.mockResolvedValue(Promise.resolve(Response));

    renderFunction();
    const gridElement= screen.getAllByTestId("grid");
    //findby and findallby needs await
    gridElement.forEach((data)=>{
        fireEvent.click(data);
    expect(window.location.pathname).toBe("/enterpreuner/bookdetails");
    })  
})

it('should have input field',()=>{
    renderFunction()
    const formInput=screen.getByTestId("form")
    expect(formInput).toBeInTheDocument()
})

it('change of form input',()=>{
    renderFunction()
    const formInput=screen.getByPlaceholderText("Search by title or author")
    // const formInput=screen.getByTestId('form')
    if(formInput)
    fireEvent.click(formInput)
    fireEvent.change(formInput ,{target:{value:"hello alll"}});
    expect((formInput as HTMLInputElement).value).toBe("hello alll")
})