import styled from "styled-components";

export const Container = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        input{
            border:0.4px solid #444;
            padding: 14px 16px;
            border-radius: 8px;
        }
        .email{
            margin-top: 8%;
        }
        .btn-divs{
            display: flex;
            justify-content: space-between;
        }
        .save{
            background: #42f54b;
        }
        .close{
            background: #ff1717;
            color: white
        }
        button{
            cursor: pointer;
            &:hover{
                opacity: 0.5;
            }
            margin-top: 2rem;
            font-weight: bold;
            border: none;
            padding: 14px 16px;
            border-radius: 8px;
        }
    }

`