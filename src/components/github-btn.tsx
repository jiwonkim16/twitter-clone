import { GithubAuthProvider, signInWithPopup } from "firebase/auth"
import styled from "styled-components"
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const Button = styled.span`
    background-color: white;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 50px;
    border: 0;
    width: 100%;
    color: black;
    display: flex;
    cursor: pointer;
    gap: 5px;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    height: 25px;
`

function GithubBtn() {
    const navigate = useNavigate()
    const onClick = async ()=>{
        try{
            const provider = new GithubAuthProvider()
            await signInWithPopup(auth, provider)
            navigate("/")
        }catch(error){
            console.error(error)
        }
    }
  return (
    <>
    <Button onClick={onClick}>
        <Logo src="/github-logo.svg" />
        Continue with Github
    </Button>
    </>
  )
}

export default GithubBtn