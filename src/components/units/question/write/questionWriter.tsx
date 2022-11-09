import * as S from "../question.styles";

export default function QuestionWriter() {
  return (
    <>
      <S.Write>
        <S.Textarea>
          <textarea placeholder="답변을 입력해주세요."></textarea>
          <button>취소</button>
          <button>등록</button>
        </S.Textarea>
      </S.Write>
    </>
  );
}