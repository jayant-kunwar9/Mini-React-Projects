//                          Its a lecture of React part-4 , (Object & State)...


import {useState} from "react";

export default function Ludo(){

    let [moves, setMoves]= useState({blue:0, yellow:0, red:0, green:0});     // here, object is used as it has 4 state variables, and when we work on big project state varible increases, so make it as object, and we can update the state variable using spread operator.

    let [arr, setArr]= useState(["no moves"]);



    //let updateBlue=()=>{
    //     console.log('moves.blue= ${moves.blue}')
    //     setMoves((preMoves)=>{
    //         return {...preMoves, blue: preMoves.blue+1}    // here, we are using spread operator to update the state variable, and we are using preMoves to get the previous state variable value, and then we are updating the blue state variable by adding 1 to it.
    //     });
    // };


    let updateBlue=()=>{

        setArr((preArr)=> {
            return [...preArr, "blue moves"];
        });
        console.log(arr);     // why UI is not updating when used updateBlue, it is updating when {arr} is used.
    
    }



    let updateYellow=()=>{
        console.log('moves.yellow= ${moves.yellow}')
        setMoves((preMoves)=>{
            return {...preMoves, yellow: preMoves.yellow+1}
        });
    };

    let updateRed=()=>{
        console.log('moves.red= ${moves.red}')
        setMoves((preMoves)=>{
            return {...preMoves, red: preMoves.red+1}
        });
    };

    let updateGreen=()=>{
        console.log('moves.green= ${moves.green}')
        setMoves((preMoves)=>{
            return {...preMoves, green: preMoves.green+1}
        });
    };



    return (
        <div>
            <h1>Game Begins...</h1>
            <p>Blue moves={updateBlue}</p>

            <div className="board">
                <p>Blue Moves</p>
                <p>Blue Moves= {moves.blue}</p>
                 <button style={{backgroundColor: "blue"}}  onClick={updateBlue}>+1</button> 
                
                <p>Yellow Moves</p>
                 <p>Yellow Moves= {moves.yellow}</p>
                <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
               
                <p>Red Moves</p>
                 <p>Red Moves= {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
               
                <p>Green Moves</p>
                <p>Green Moves= {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                


            </div>
        </div>
    )

}