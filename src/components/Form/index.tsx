import ResultBox from "./ResultBox";
import RectangleBox from "./RectangleBox";
import { Container, PolygonCreationContainer } from "./styles";

import TriangleBox from "./TriangleBox";


export function Form() {
    
   
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