import { expect, test, vi } from "vitest";
import { render,screen } from "@testing-library/react";
import AsyncData from "./AsyncData";


test("Asynchronous data",async ()=>{
    const mocks=[{id:1,name:"Sanjay"},{id:2,name:"Ram"}];

   

    global.fetch= vi.fn(()=>
    Promise.resolve({
        json:()=>Promise.resolve(mocks)
    })
    )
     render(<AsyncData/>)

     const item= await screen.findAllByRole("listitem")

     expect(item).toHaveLength(2);

})