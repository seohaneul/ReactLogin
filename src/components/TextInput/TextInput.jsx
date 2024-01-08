import * as  S from './styled';

function TextInput({ value, setValue, placeholder, type }){
    const handelValue = e => {
        // input에서 입력한 값
        console.log(e.target.value);
        // 2. onChang라는 함수에 input에서 입력한 값을 넘겨준다.
        setValue(e.target.value);
    }

    return(
        <>
        <S.input type={type} value={value} onChange={handelValue} placeholder={placeholder} />
        </>
    )
}

export default TextInput;