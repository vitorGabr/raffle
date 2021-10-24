import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        
        .email{
            margin-top: 8%;
        }
        .btn-divs{
            margin-top: 8%;
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
       
    }

`