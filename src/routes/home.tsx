import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"

function Home() {
  const navigate = useNavigate()
  const logOut = ()=>{
    // 로그아웃 기능 구현 시에는 firebase 파일에서 생성한 auth 인스턴스를 호출한 다음 signOut만 하면 된다.
    auth.signOut()
    navigate("/login")
  }
  return (
    <h1>
      <button onClick={logOut}>Log Out</button>
    </h1>
  )
}

export default Home