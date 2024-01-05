// Homework 1
import { Homework1 } from "hw-1/hw-1";

// Homework 2
import { Greeting } from "hw-2/Greeting";
import { Message } from "hw-2/Message";
import { Button } from "hw-2/Button";


export const App = ({id}) => {
    if (Number(id) === 1) {
      return (
          <Homework1 
            name={'Matvii Alkhimov'}
            url={"https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w="}
            alt={"red apple"}
            website={{
              link: "https://readlang.com/webReader",
              name: "Readlang"
            }}
            firstNum={2}
            secondNum={5}
            colors={["red", "blue", "green"]}
          ></Homework1>
      )
    } else if (Number(id) === 2) {
      return (
        <>
          <Greeting
            name={"Matvii"}
          ></Greeting>
          <Message
            text={"Привіт, як справи??"}
          ></Message>
          <Button
            onClick={()=>{
              console.log("message");
            }}
          ></Button>
        </>
      )
    }
};
