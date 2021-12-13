import {render, screen} from "@testing-library/react";
import Header from "../Header";

describe("Header Tests", function () {

    it('Should Header renders Shoman text', async () => {
        render(<Header title={"Shoman"}/>);
        const linkElement = screen.getByRole(/heading/i,{
            name:/Shoman/i
        });
        expect(linkElement).toBeInTheDocument();
    });

    it('Should not Header renders Shoman text', async () => {
        render(<Header title={"Naim"}/>);
        const linkElement = screen.queryByText(/Shoman/i);
        expect(linkElement).not.toBeInTheDocument();
    });

})