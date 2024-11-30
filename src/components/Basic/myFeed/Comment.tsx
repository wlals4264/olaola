import React, { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userUIDState, isFeedItemModalOpenState, userNicknameState } from '../../../datas/recoilData';
import { addCommentToDB, getCommentsListFromDB } from '../../../utils/indexedDB';

// Props 타입 정의
interface CommentProps {
  feedItemId: number;
}

const Comment: React.FC<CommentProps> = ({ feedItemId }) => {
  const [comment, setComment] = useState<string>('');
  const [commentsList, setCommentsList] = useState<Array<{ userNickName: string; comment: string }>>([]);
  const userNickName = useRecoilValue(userNicknameState);
  const userUID = useRecoilValue(userUIDState);
  const setFeedItemModalOpen = useSetRecoilState(isFeedItemModalOpenState);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment) {
      // 파일 DB에 저장
      addCommentToDB(comment, userUID, feedItemId, userNickName);
      setCommentsList((prevCommentsList) => [...prevCommentsList, { userNickName, comment }]);
      setFeedItemModalOpen(true);
      setComment('');
    } else {
      alert('댓글을 입력해주세요!');
    }
  };

  useEffect(() => {
    getCommentsListFromDB().then((comments) => setCommentsList(comments));
    console.log(commentsList);
  }, [feedItemId]);

  return (
    <>
      <div className="h-16 my-1 py-1">
        <div className="max-h-[60px] overflow-y-auto scrollbar-hide">
          {commentsList.map((comment, index) => {
            return (
              <div key={index} className="flex items-center">
                <span className="font-semibold text-sm mr-2">{comment.userNickName}</span>
                <p className="font-normal text-xs flex-1">{comment.comment}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 댓글창 */}
      <form
        className="relative flex items-center w-[360px] border border-gray-300 rounded-xl mt-2"
        onSubmit={handleCommentSubmit}>
        <input
          onChange={handleCommentChange}
          type="text"
          placeholder="댓글을 남겨주세요!"
          value={comment}
          className="w-full h-8 px-3 py-[6px] rounded-xl text-xs items-center outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-black" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.378 8.125H13.4451V2.5C13.4451 1.80977 12.8547 1.25 12.1267 1.25H10.8083C10.0802 1.25 9.48984 1.80977 9.48984 2.5V8.125H3.55695C2.82893 8.125 2.23853 8.68477 2.23853 9.375V10.625C2.23853 11.3152 2.82893 11.875 3.55695 11.875H9.48984V17.5C9.48984 18.1902 10.0802 18.75 10.8083 18.75H12.1267C12.8547 18.75 13.4451 18.1902 13.4451 17.5V11.875H19.378C20.106 11.875 20.6964 11.3152 20.6964 10.625V9.375C20.6964 8.68477 20.106 8.125 19.378 8.125Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export default Comment;
