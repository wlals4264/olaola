import React from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  isLoginUserState,
  userNicknameState,
  isLoginModalOpenState,
  isSuccessModalOpenState,
  userUIDState,
  userImgState,
} from '../../datas/recoilData';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import SuccessForm from './LoginForm/SuccessForm';
import { Link } from 'react-router-dom';
import useAuthState from '../../utils/useAuthState';
import ModalTitle from '../Modal/ModalTitle';

const LoginNav: React.FC = () => {
  useAuthState();

  const setIsLoginUser = useSetRecoilState(isLoginUserState);
  const setUserImg = useSetRecoilState(userImgState);
  const setLoginModalOpen = useSetRecoilState(isLoginModalOpenState);
  const [isSuccessModalOpen, setSuccessModalOpen] = useRecoilState(isSuccessModalOpenState);
  const [nickname, setNickname] = useRecoilState(userNicknameState);
  const setUserUID = useSetRecoilState(userUIDState);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  // 로그아웃 함수
  const onSignOut = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      console.log('로그아웃 되었습니다.');

      // 상태 초기화
      localStorage.clear();
      setNickname('');
      setUserImg('');
      setUserUID(null);
      setIsLoginUser(false);
      setLoginModalOpen(false);
      navigate('/');
    } catch (error: any) {
      console.log(error);
      console.log(error?.code);
      setIsLoginUser(true);
    }
  };

  return (
    <>
      <div className="font-noto flex gap-4 items-center p-2 w-auto">
        {/* logo & title */}
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center gap-4" onClick={goToHome}>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22.5" cy="22.5" r="22.5" fill="#A5E1FF" />
              <path
                d="M34.8017 29.0742L23.5517 11.5742C23.3216 11.2164 22.9255 11 22.5001 11C22.0747 11 21.6786 11.2164 21.4486 11.5742L10.1986 29.0742C10.0772 29.2631 10.0088 29.4811 10.0008 29.7054C9.99276 29.9298 10.0453 30.1522 10.1529 30.3492C10.2605 30.5462 10.4192 30.7106 10.6122 30.8251C10.8053 30.9396 11.0256 31 11.2501 31H33.7501C34.2075 31 34.6282 30.7504 34.8474 30.3488C34.955 30.1519 35.0075 29.9295 34.9994 29.7053C34.9914 29.481 34.9231 29.263 34.8017 29.0742ZM22.5001 14.5617L25.8357 19.75H22.5001L20.0001 22.25L18.5134 20.7633L22.5001 14.5617Z"
                fill="white"
              />
            </svg>
            <h1 className="text-3xl font-itim">OlaOla</h1>
          </button>
        </div>

        {/* nav Buttons & welcome message & logout Button */}
        <div className="flex flex-1 justify-between items-center">
          {/* nav Buttons */}
          <div className="flex gap-4 flex-shrink-0 mr-40">
            <Link to="/center-info">
              <button className="flex">
                <span className="text-l flex-shrink-0 font-semibold">암장 정보</span>
              </button>
            </Link>
            <Link to="/browsing-feed">
              <button className="flex">
                <span className="text-l flex-shrink-0 font-semibold">피드 둘러보기</span>
              </button>
            </Link>
            <Link to="/my-feed">
              <button className="flex">
                <span className="text-l flex-shrink-0 font-semibold">내 피드</span>
              </button>
            </Link>
          </div>

          {/* welcome message & logout Button */}
          <div className="flex gap-4 items-center justify-center mr-2 flex-shrink-0">
            <p className="flex-shrink-0 ">
              <span className="hover:text-primary text-lg font-semibold">{nickname}</span>님 환영합니다!
            </p>
            <button
              className="flex-shrink-0 text-l font-semibold w-86px px-3 py-1 rounded-xl bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-whi"
              onClick={onSignOut}>
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* SuccessForm 모달 */}
      {isSuccessModalOpen &&
        createPortal(
          <Modal isOpen={isSuccessModalOpen} onClose={handleCloseSuccessModal}>
            <SuccessForm />
          </Modal>,
          document.body
        )}
    </>
  );
};

export default LoginNav;
