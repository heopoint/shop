import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  //로그인한 사용자가 있는지 확인
  //그 사용자가 어드민 권한이 있는지 확인
  //requireAdmin이 ture인 경우에는 로그인도 되고,
  //어드민 권한가지고 있으면 전달된 children보여줌
  //어드민 권한 없으면 상위경로로 이동
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}
