import React from 'react';

const LoginNav: React.FC = () => {
  return (
    <>
      <div className="font-noto flex gap-4 items-center p-2 w-auto">
        <div className="flex items-center gap-4">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22.5" cy="22.5" r="22.5" fill="#A5E1FF" />
            <path
              d="M34.8017 29.0742L23.5517 11.5742C23.3216 11.2164 22.9255 11 22.5001 11C22.0747 11 21.6786 11.2164 21.4486 11.5742L10.1986 29.0742C10.0772 29.2631 10.0088 29.4811 10.0008 29.7054C9.99276 29.9298 10.0453 30.1522 10.1529 30.3492C10.2605 30.5462 10.4192 30.7106 10.6122 30.8251C10.8053 30.9396 11.0256 31 11.2501 31H33.7501C34.2075 31 34.6282 30.7504 34.8474 30.3488C34.955 30.1519 35.0075 29.9295 34.9994 29.7053C34.9914 29.481 34.9231 29.263 34.8017 29.0742ZM22.5001 14.5617L25.8357 19.75H22.5001L20.0001 22.25L18.5134 20.7633L22.5001 14.5617Z"
              fill="white"
            />
          </svg>
          <h1 className="text-3xl font-itim">OlaOla</h1>
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex gap-4 ">
            <button className="text-l m-auto shrink-0 font-semibold">암장 정보</button>
            <button className="text-l shrink-0 font-semibold">피드 둘러보기</button>
            <button className="text-l shrink-0 font-semibold">내 피드</button>
          </div>

          <div className="flex gap-1 items-center justify-center mr-2">
            <button className="shrink-0 px-3 py-1">
              <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 22.8571C11.5768 22.8571 12.8558 21.5781 12.8558 19.9999H7.1442C7.1442 21.5781 8.42322 22.8571 10 22.8571ZM19.6156 16.1736C18.7531 15.2468 17.1393 13.8526 17.1393 9.28569C17.1393 5.81695 14.7071 3.04017 11.4277 2.35892V1.42857C11.4277 0.63973 10.7884 0 10 0C9.21161 0 8.57233 0.63973 8.57233 1.42857V2.35892C5.29287 3.04017 2.86074 5.81695 2.86074 9.28569C2.86074 13.8526 1.2469 15.2468 0.384405 16.1736C0.116548 16.4616 -0.00220127 16.8058 3.08655e-05 17.1428C0.00494156 17.8749 0.579493 18.5714 1.43306 18.5714H18.5669C19.4205 18.5714 19.9955 17.8749 20 17.1428C20.0022 16.8058 19.8835 16.4611 19.6156 16.1736Z"
                  fill="#8C8C8C"
                />
              </svg>
            </button>
            <button className="shrink-0 px-3 py-1">
              <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.0123 4.75639C18.5308 2.4472 13.9035 1.92158 10.0596 2.61802C5.75909 -1.54607 0.939937 0.369248 0 0.919856C0 0.919856 3.3072 3.74104 2.77003 6.21196C-1.14539 10.2189 0.715927 14.6801 2.77003 16.7866C3.3072 19.2576 0 22.0787 0 22.0787C0.930886 22.6312 5.73692 24.5406 10.0596 20.3978C13.8949 21.0897 18.5222 20.5687 22.0123 18.2554C27.4093 14.7964 27.427 8.23358 22.0123 4.75639ZM13.313 18.2331C11.9671 18.237 10.6265 18.0633 9.3256 17.7166L8.43092 18.5838C7.93396 19.0676 7.37751 19.4858 6.77506 19.8281C6.04413 20.1976 5.25008 20.4247 4.43494 20.4973C4.4802 20.4165 4.52002 20.3356 4.5603 20.2593C5.45543 18.5935 5.69679 17.099 5.28437 15.7758C3.81224 14.6124 2.93114 13.1255 2.93114 11.4995C2.93114 7.77429 7.58059 4.75639 13.313 4.75639C19.0454 4.75639 23.6948 7.77429 23.6948 11.4995C23.6948 15.2248 19.0454 18.2331 13.313 18.2331ZM8.33226 13.1032C7.92126 13.109 7.52472 12.9511 7.22952 12.6639C6.93432 12.3768 6.76455 11.9839 6.75741 11.5713C6.72573 9.50925 9.82702 9.46427 9.85825 11.5218V11.545C9.86016 11.7479 9.82219 11.9493 9.74651 12.1376C9.67083 12.3258 9.55893 12.4973 9.4172 12.6421C9.27548 12.7869 9.10671 12.9022 8.92055 12.9815C8.73438 13.0608 8.53448 13.1024 8.33226 13.1041V13.1032ZM11.6707 11.5713C11.6349 9.50925 14.7362 9.45973 14.772 11.5172V11.545C14.7896 13.5929 11.7064 13.6152 11.6707 11.5713ZM18.1593 13.1032C17.7482 13.109 17.3516 12.9511 17.0564 12.6639C16.7611 12.3768 16.5912 11.9839 16.584 11.5713C16.5527 9.50925 19.654 9.46427 19.6853 11.5218V11.545C19.6878 11.7481 19.6503 11.9498 19.5749 12.1384C19.4994 12.3269 19.3876 12.4986 19.2457 12.6435C19.1039 12.7885 18.9348 12.9038 18.7484 12.9828C18.5619 13.0619 18.3617 13.1031 18.1593 13.1041V13.1032Z"
                  fill="#8C8C8C"
                />
              </svg>
            </button>
            <button className="shrink-0 px-3 py-1 ml-2 w-[30px] h-[30px] rounded-full bg-primary items-center justify-center">
              {/* 닉네임 첫글자 */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNav;