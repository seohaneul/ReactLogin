import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput'
import * as S from './styled';

export default function Index() {

    const [formValue, setFormValue] = useState({
        name: "",
        id: "",
        password: ""
      });
      console.log(formValue)
    
    function LoginTest(){
        
    }
    function disabled(){
        if(formValue.name === "" || formValue.id === "" || formValue.password === ""){
            const target = document.getElementById('target_btn');
            target.disabled = false;
        }
    }


    return (
        <form>
            <S.LoginDiv>
                <h1>Login</h1>
                <div>
                    <TextInput type={'text'} value={formValue.name} setValue={(value) => {setFormValue((state) => ({...state,name: value}))}} placeholder={'이름를 입력하세요.'}/>
                    <TextInput type={'text'} value={formValue.id} setValue={(value) => {setFormValue((state) => ({...state,id: value}))}} placeholder={'id를 입력하세요'}/>
                    <TextInput type={'password'} value={formValue.password} setValue={(value) => {setFormValue((state) => ({...state,password: value}))}} placeholder={'password를 입력하세요.'}/>
                </div>
                <S.LoginBtn id='target_btn' onClick={LoginTest()} disabled={disabled()}>로그인</S.LoginBtn>
            </S.LoginDiv>
        </form>
    )
}
