import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const AppWithBrowse=()=><BrowserRouter>
  <App />
</BrowserRouter>

describe("App Tests", function (){
  it('Should not renders learn react link', async () => {
    render(<AppWithBrowse/>);
    const linkElement = await screen.queryByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  });
  it('Should not renders learn react link', async () => {
    render(<AppWithBrowse/>);
    const linkElement = await screen.queryByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  });

})