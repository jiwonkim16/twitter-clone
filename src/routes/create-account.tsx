import { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
width: 420px;
padding: 50px 0px;
`
const Title = styled.h1`
  color: white;
  font-size: 42px;
`

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  // 만약 input의 타입이 submit이라면 cursor를 pointer로 변경,
  &[type="submit"]{
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
  }
`
const Error = styled.span`
  font-weight: 600;
  color: tomato;
`

function CreateAccount() {
  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {target : {name, value}} = e;
    if(name === "name"){
      setName(value)
    }else if(name === "email"){
      setEmail(value)
    }else if(name === "password"){
      setPassword(value)
    }
  }

  const onSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    // 계정 생성 및 사용자의 프로필 이름 설정, 홈페이지로 리다이렉트
    try{

    }catch(e){
      // setError(e)
    }finally{
      setLoading(false)
    }
    console.log(name, email, password)
  }
  return (
    <Wrapper>
      <Title>Log into 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required />
        <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
        <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
        <Input type="submit" value={isLoading ? "Loading..." : "Create Account"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  )
}

export default CreateAccount