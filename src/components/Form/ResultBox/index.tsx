import { useState } from 'react';
import { api } from '../../../services/api'
import { BoxContainer, ResultSection } from './styles'

const ResultBox: React.FC = ({  }) => {
    const [result, setResult] = useState<Number | undefined>();

    const handleGetResult = async () => {
        const { data } = await api.get<{
            areatotal: Number
        }>('areatotal');

        setResult(data.areatotal);
    }

    return (
        <BoxContainer>
             <strong>
                Área total
            </strong>
            
            <ResultSection>
                <strong>
                    {result ? result : ''}
                </strong>
            </ResultSection>

            <button onClick={handleGetResult}>
                Calcular área total
            </button>
        </BoxContainer>
    )
}

export default ResultBox;