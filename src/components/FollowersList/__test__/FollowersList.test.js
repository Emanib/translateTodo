import { cleanup, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import FollowersListComponent from "../Components/FollowersListComponent";
import {mockData} from "../../../__mocks__/followersDataMock";

const MockedFollowersList=()=><BrowserRouter>
    <FollowersListComponent followers={mockData.data.results}/>
</BrowserRouter>

describe("FollowersList", ()=>{
/*    beforeEach(function () {

    })*/
/*    beforeAll(function () {
        act(()=>{
            jest.mock("../../../__mocks__/axios")
        })
    })*/
   // afterEach(function ())

    it('should render link', async function () {
        render(<MockedFollowersList  />)
        const linkElement=screen.getByRole("link", {
            name:/Go Back/i
        })
        expect(linkElement).toBeInTheDocument()
    });

    it('should render card', async function () {
        render(<MockedFollowersList />)
        const cardElement=await screen.findByTestId("follower-card-0")
        expect(cardElement).toBeInTheDocument()
    });

    it('should render list of cards', async function () {
        render(<MockedFollowersList />)
        const cardElement=await screen.findAllByTestId(/follower-card-/i)
        expect(cardElement.length).toBe(5)
    });

    afterAll(cleanup)
})