import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HelloWorld from "./HelloWorld";
import AboutUs from "./AboutUs";

describe('Hello World', () => {
    test('component should load', () => {
        const message = "hey";
        render(<HelloWorld message = {message}/>);
        expect(screen.getByTestId('message')).toHaveTextContent(message)
    })
    
    test('component click event should work',() => {
        const message = "hey";
        render(<HelloWorld message = {message}/>);
        const element = screen.getByTestId('click');
        userEvent.click(element);
        expect(element).toHaveTextContent("yes")
    })

   test('about us shouls load', () => {
       render (<AboutUs />);
   })

   test('Component should display info',() => {
    render (<AboutUs />);
        expect(screen.getByTestId('about-msg')).toHaveTextContent("AboutUs")
   })
})