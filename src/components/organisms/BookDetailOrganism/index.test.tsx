import { fireEvent, render, screen } from "@testing-library/react";
import BookDetailOrganism from "./index"
import {BrowserRouter} from "react-router-dom"

const renderFunction=()=>{
    render(
    <BrowserRouter>
    <BookDetailOrganism book={[]} setData={undefined}></BookDetailOrganism></BrowserRouter>)}

it('should have read now button',()=>{
    renderFunction();
    const readNow=screen.getByRole('button',{name:/Read now/i})
    expect(readNow).toBeInTheDocument()
})

it('read now should navigate to myLibrary',()=>{
    renderFunction();
    const readNow=screen.getByRole('button',{name:/Read Now/i})
    fireEvent.click(readNow);
    expect(window.location.pathname).toBe("/");

})