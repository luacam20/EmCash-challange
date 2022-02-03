import styled from "styled-components";

export const BoxContainer = styled.div`
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    display: flex;
    flex-direction: column;

    strong {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    input {
        margin-top: 10px;
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
        border-radius: 0.25rem;
        
        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;
        
        &::placeholder{
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: flex-end;
    margin-top: 12px;

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
