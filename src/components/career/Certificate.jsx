/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {css} from "@emotion/react";
import {GoPencil} from "react-icons/go";
import dayjs from 'dayjs';
import {useSelector} from "react-redux";

function Certificate({memberId, certificateName, date, onEdit}) {
  const myMemberId = useSelector(state => state.memberId); // 리덕스: 내 멤버 아이디

  return (
    <div
      css={css({
        // position: "relative",
        width: "530px",
        height: "70px", // or 65px
        background: "#f8f6f6",
        borderRadius: "30px",
        boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.04)",
        margin: "0 auto", // 페이지 중앙에 나타나도록 설정
        marginTop: "15px",
        marginBottom: "20px",
        display: "flex", // 내부 요소를 정렬하기 위한 flex 설정
        alignItems: "center", // 수직 중앙 정렬
        padding: "13px"
      })}
    >
      <div
        css={css({
          display: "flex", // 수평 정렬
          marginLeft: "13px",
          gap: "20px" // 요소 간 간격 설정
        })}
      >
        <div><b>{certificateName}</b></div>
        <div
          css={css({
            fontSize: "13px",
            display: "flex",
            alignItems: "center",
            // marginTop: "3px" // 배포판에서 어떻게 보이는지 확인 (다른사람 컴퓨터 에서도)
          })}
        >
          {dayjs(date).format('YYYY년 MM월')}
        </div>
      </div>
      {/*수정 버튼 조건부 렌더링*/}
      {memberId === myMemberId && (
        <div // 수정하기 버튼
          onClick={onEdit}
          css={css({
            display: "flex", // 내부 요소를 정렬하기 위한 flex 설정
            alignItems: "center", // 수직 중앙 정렬
            marginLeft: "auto", // GoPencil을 제일 오른쪽으로 배치
            marginRight: "10px",
            cursor: "pointer",
          })}
        >
          <GoPencil/>
        </div>
      )}
    </div>
  )
}

export default Certificate;