import { render, screen } from "@testing-library/react";
import  Card  from "./index";

it('bookImage',()=>{
    render(<Card mode={"normal"} bookName={"abc"} authorName={"def"} src={"assets/biggboss.png"} time={"13-minute read"} read={""} status={false}></Card>)
    const image=screen.getByRole('img');
    expect(image).toHaveAttribute('src','assets/biggboss.png');
    expect(image).toHaveAttribute('alt','book_image')

})

it('bookname',()=>{
    render(<Card mode={"finished"} bookName={"abc"} authorName={"def"} src={"assets/biggboss.png"} time={"13-minute read"} read={""} status={false}></Card>)

    const bookName = screen.getByText(/abc/i);
    expect(bookName).toBeInTheDocument();

})


it('authorname',()=>{
    render(<Card mode={"read again"} bookName={"abc"} authorName={"def"} src={"assets/biggboss.png"} time={"13-minute read"} read={""} status={false}></Card>)

    const authorName = screen.getByText(/def/i);
    expect(authorName).toBeInTheDocument();

})


it('timeStamp',()=>{
    render(<Card mode={"non-hover"} bookName={"abc"} authorName={"def"} src={"assets/biggboss.png"} time={"13-minute read"} read={""} status={false}></Card>)

    const time = screen.getByText(/13-minute read/i);
    expect(time).toBeInTheDocument();

})