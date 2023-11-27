import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase"
import { Link, useNavigate } from "react-router-dom"
import { FirebaseError } from "firebase/app"
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components"
import GithubBtn from "../components/github-btn"

function CreateAccount() {
  const [isLoading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
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

  const onSubmit = async(e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setError("")
    // input의 값이 비어있다면 코드 실행 x
    if(isLoading || name === "" || email === "" || password === "") return;
    // 계정 생성 및 사용자의 프로필 이름 설정, 홈페이지로 리다이렉트
    try{
      setLoading(true)
      // firebase에서 제공해주는 createUserWithEmailAndPassword 함수는 인증 인스턴스를 첫번째 인자로 받고 이메일과 비밀번호를 필요로 한다.
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log(credentials.user)
      // firebase에서 제공하는 updateProfile 함수는 업데이트 할 유저 정보와 표시되는 이름을 무엇으로 바꿀건지를 인자로 받는다.
      await updateProfile(credentials.user, {displayName : name})
      navigate("/")
    }catch(e){
      if(e instanceof FirebaseError){
        setError(e.message)
      }
    }finally{
      setLoading(false)
    }
  }
  return (
    <Wrapper>
      <Title>Join 𝕏</Title>
      <Form onSubmit={onSubmit}>
        <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required />
        <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
        <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
        <Input type="submit" value={isLoading ? "Loading..." : "Create Account"} />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
      <Switcher>Already have an account?<Link to="/login">Log in &rarr; </Link></Switcher>
      <GithubBtn />
    </Wrapper>
  )
}

export default CreateAccount