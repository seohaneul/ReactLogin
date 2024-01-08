import styled from 'styled-components';


export const LoginDiv = styled.div`
    margin: 0 auto;
    background-color: #fff;
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20%;
    border-radius: 10px;
    
    >div{
        display: flex;
        flex-direction: column;
        background-color: #fff;
    }
    >h1{
        background-color: #fff;
        font-size: 40px;
    }
`


export const LoginBtn = styled.button`
    width: 200px;
    height: 50px;
    background: #304f70;
    color: #fff;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`
