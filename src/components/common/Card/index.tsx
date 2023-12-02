import React from "react";
import style from "./card.module.css";
import Image from "next/image";
import Avatar from "@/components/common/Avatar";

interface IProps {
  name?: string;
  contentEl?: string | React.ReactNode;
  actionEl?: string | React.ReactNode;
  createdAt?: string;
  imagePath?: string;
}

const StyledImg = {
  display: "inline-block",
  borderRadius: "5px",
  padding: "2px",
};

/**
 * @name Posts
 * @author 이동현
 * @desc 컨텐츠 Card 컴포넌트
 */
const Card = ({ name, imagePath, actionEl, contentEl, createdAt }: IProps) => {
  return (
    <div className={style.card_container}>
      <div className={style.cards_header}>
        <div className={style.card_header_left}>
          <Avatar src={imagePath || "/pet.jpg"} alt="pimg" style={StyledImg} />
          <div>
            <div className={style.name}>{name}</div>
            <div className={style.time}>방금 전</div>
          </div>
        </div>
        <div className={style.card_header_left}>{actionEl && actionEl}</div>
      </div>
      <div className={style.card_contents_wrap}>{contentEl}</div>
    </div>
  );
};

export default Card;
