import {act, fireEvent, render, screen} from "@testing-library/react";
import AddInput from "../AddInput";


const mockedCallback=jest.fn()

describe('AddInput',  function () {
    it('should render input', async function () {
        render(<AddInput todos={[]}
            setTodos={mockedCallback}/>)
            const inputElement=screen.getByPlaceholderText("Add a new task here...")
        expect(inputElement).toBeInTheDocument()
    });

    it('should input handle onChange', async function () {
        render(<AddInput todos={[]}
            setTodos={mockedCallback}/>)
            const inputElement=screen.getByPlaceholderText("Add a new task here...")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, {target:{
            value:"Naim"
            }})
        expect(inputElement.value).toBe("Naim")
    });

    it('should render button', async function () {
        render(<AddInput todos={[]}
            setTodos={mockedCallback}/>)
            const buttonElement=screen.getByRole("button", {
                name:/Add/i
            })
        expect(buttonElement).toBeInTheDocument()
    });

    it('should button handle onClick', async function () {
        render(<AddInput todos={[]}
            setTodos={mockedCallback}/>)
            const buttonElement=screen.getByRole("button", {
                name:/Add/i
            })

        fireEvent.click(buttonElement)
        expect(mockedCallback).toBeCalled()
    });

    it('should button handle onClick', async function () {
        render(<AddInput todos={[]}
            setTodos={mockedCallback}/>)

        const inputElement=screen.getByPlaceholderText("Add a new task here...")
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, {target:{
                value:"Naim"
            }})
        expect(inputElement.value).toBe("Naim")

            const buttonElement=screen.getByRole("button", {
                name:/Add/i
            })

        act(()=>{
            fireEvent.click(buttonElement)
        })
        expect(mockedCallback).toBeCalled()
        expect(inputElement.value).toBe("")
    });
})