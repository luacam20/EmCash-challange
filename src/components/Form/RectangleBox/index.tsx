import React, { useState } from 'react';
import {api} from '../../../services/api';
import { BoxContainer, ButtonContainer } from '../RectangleBox/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios';

const RectangleBox: React.FC = ({ }) => {
    const [baseRectangle, setBaseRectangle] = useState<null|number>(null);
    const [heightRectangle, setHeightRectangle] = useState<null|number>(null);
    
    const handleCreate = async () => {
        try {
            await api.post('retangulos', {
                base: baseRectangle,
                altura: heightRectangle,
            });

            toast('Retângulo criado com sucesso ! Clique em calcular area total');
        } catch(error: AxiosError | any){
            if(error?.response?.data?.altura){
                
                error?.response?.data?.altura.forEach((error: string) => {
                    toast(error);
                })
            }
            
            if(error?.response?.data?.base){
                
                error?.response?.data?.base.forEach((error: string) => {
                    toast(error);
                })
            }

            if(typeof error.response.data === 'string'){
                toast(error.response.data)
            }
        }

        setBaseRectangle(null);
        setHeightRectangle(null);
    }

    return (
        <BoxContainer>
            <strong>
                Retângulo
            </strong>
            <input 
                type="number" 
                placeholder="Adicionar base" 
                onChange={(e) => setBaseRectangle(Number(e.target.value))}
                value={baseRectangle || ''}
            />
            <input 
                type="number" 
                placeholder="Adicionar altura" 
                onChange={(e) => setHeightRectangle(Number(e.target.value))}
                value={heightRectangle || ''}
            />
           
            <ButtonContainer>
                <button onClick={handleCreate}>Criar retângulo</button>
            </ButtonContainer>
        </BoxContainer>
    );
}

export default RectangleBox;