// 로그인한 사용자는 해당 컴포넌트를 보게 되며, 그렇지 않은 경우 로그인 또는 계정 생성 페이지로 리다이렉션

import { Navigate } from "react-router-dom";
import { auth } from "../firebase"

function ProtectedRoute({children,} : {children : React.ReactNode}) {
  // currentUser는 사용자의 로그인 여부를 알려주며, user정보 또는 null을 반환한다.
    const user = auth.currentUser;
  if(user===null){
    return <Navigate to="/login" />
  }
    return children
}

export default ProtectedRoute