import { useState } from "react";
import ResultBox from "./ResultBox";
import RectangleBox from "./RectangleBox";
import { Container, PolygonCreationContainer } from "./styles";

import TriangleBox from "./TriangleBox";


export function Form() {
    const [result, setResult] = useState(0);

   
    return (
        <Container>
            <PolygonCreationContainer>    
                <TriangleBox />

                <RectangleBox />   
            </PolygonCreationContainer>
            
            <ResultBox />
        </Container>
    )
}