import React from 'react';

const Comment: React.FC = () => {
  return (
    <>
      <div className="h-16 mt-2 ">
        <div className="flex items-center">
          <span className="font-semibold text-sm mr-2">user1</span>
          <p className="font-normal text-xs flex-1">댓글</p>
        </div>
      </div>
      {/* 댓글창 */}
      <form className="flex w-[360px] items-center">
        <input type="text" placeholder="댓글을 남겨주세요!" className="w-full p-1 rounded-lg text-sm" />
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.378 8.125H13.4451V2.5C13.4451 1.80977 12.8547 1.25 12.1267 1.25H10.8083C10.0802 1.25 9.48984 1.80977 9.48984 2.5V8.125H3.55695C2.82893 8.125 2.23853 8.68477 2.23853 9.375V10.625C2.23853 11.3152 2.82893 11.875 3.55695 11.875H9.48984V17.5C9.48984 18.1902 10.0802 18.75 10.8083 18.75H12.1267C12.8547 18.75 13.4451 18.1902 13.4451 17.5V11.875H19.378C20.106 11.875 20.6964 11.3152 20.6964 10.625V9.375C20.6964 8.68477 20.106 8.125 19.378 8.125Z"
            fill="black"
          />
        </svg>
      </form>
    </>
  );
};

export default Comment;
