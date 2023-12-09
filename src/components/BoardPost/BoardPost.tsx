import React from "react";
import { useSession } from "next-auth/react";
import Card from "@/components/common/Card";
import CommentForm from "@/components/Comment/CommentForm";
import SingleComment from "@/components/Comment/SingleComment";
import Button from "@/components/common/Button";
import { IResponseBoard } from "@/interfaces/study_board";
import style from "./boardPost.module.css";
import { loadComment } from "@/axios/fetcher/comment/loadComment";

interface Iprops {
  board: IResponseBoard;
  onDelPost: (id: string) => void;
}

const BoardPost = ({ board, onDelPost }: Iprops) => {
  const { _id, content, user, createdAt } = board;

  return (
    <div className={style.board_post_wrap}>
      <div className={style.board_post_container}>
        <div className="post_wrap">
          {
            <Card
              name={user?.name as string}
              imagePath={user?.image as string}
              createdAt={createdAt}
              actionEl={
                <div className={style.post_btn_wrap}>
                  <Button
                    text="삭제"
                    className={`${style.post_btn} ${style.btn_del}`}
                    onClick={() => onDelPost(_id)}
                  />
                  <Button text="수정" className={style.post_btn} />
                </div>
              }
              content={content}
            />
          }
        </div>
        <div className={style.post_reaction}>
          <div>
            <span>좋아요 icon {0}</span>
          </div>
        </div>
      </div>
      <div className={style.comment_container}>
        <div>
          <CommentForm postId="" />
        </div>
        <div>
          <SingleComment postId={_id} fetcher={loadComment}/>
        </div>
      </div>
    </div>
  );
};

export default BoardPost;
