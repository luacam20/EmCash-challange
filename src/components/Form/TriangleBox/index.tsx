import { AxiosError } from 'axios';
import React, { useState } from 'react';
import {api} from '../../../services/api';

import { BoxContainer, ButtonContainer } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ITriangleBoxProps {
} 

const TriangleBox: React.FC<ITriangleBoxProps> = ({  }) => {
    const [sideATriangle, setSideATriangle] = useState<number|null>(null);
    const [sideBTriangle, setSideBTriangle] = useState<number|null>(null);
    const [sideCTriangle, setSideCTriangle] = useState<number|null>(null);

    const handleCreate = async () => {
        try {
            await api.post('triangulos', {
                a: sideATriangle,
                b: sideBTriangle,
                c: sideCTriangle
            });

            toast('Triangulo criado com sucesso ! Clique em calcular area total')
        } catch(error: AxiosError | any){
            if(error?.response?.data?.a){
                error?.response?.data?.a.forEach((error: string) => {
                    toast(error);
                })
            }
            
            if(error?.response?.data?.b){
                error?.response?.data?.b.forEach((error: string) => {
                    toast(error);
                })
            }

            if(error?.response?.data?.c){
                error?.response?.data?.c.forEach((error: string) => {
                    toast(error);
                })
            }
            
            if(typeof error.response.data === 'string'){
                toast(error.response.data)
            }
        }

        setSideATriangle(null);
        setSideBTriangle(null);
        setSideCTriangle(null);
    }

    return (
        <BoxContainer>
            <ToastContainer />
            <strong>
                Triângulo
            </strong>
            <input 
                placeholder="Adicionar lado A" 
                value={sideATriangle || ''}
                onChange={(e) => setSideATriangle(Number(e.target.value))}
            />
            <input 
                placeholder="Adicionar lado B" 
                value={sideBTriangle || ''}
                onChange={(e) => setSideBTriangle(Number(e.target.value))}
            />
            <input 
                placeholder="Adicionar lado C" 
                value={sideCTriangle || ''}
                onChange={(e) => setSideCTriangle(Number(e.target.value))}
            />

            <ButtonContainer>
                <button onClick={handleCreate}>Criar triangulo</button>
            </ButtonContainer>
        </BoxContainer>
    );
}

export default TriangleBox;