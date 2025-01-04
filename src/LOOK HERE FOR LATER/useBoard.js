import { useState, useEffect } from "react";

export function useBoard() {

    const [scene, setScene] = useState(()=> createEmptyScene() );
    const [shape, setShape] = useState(()=> randomShape() );
    const [position, setPosition] = useState({x: 0, y: 0});
    const [display, setDisplay] = 
                       useState( ()=> 
                              mergeIntoStage(scene, shape, position) );
    const [score, setScore] = useState(0);
    
}

//https://blog.ag-grid.com/tetris-to-learn-react/

// https://agify.io/documentation