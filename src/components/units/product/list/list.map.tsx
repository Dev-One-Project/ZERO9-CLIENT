import * as S from "./list.styles";
import ProductListPresenter from "./list.presenter";

export default function ProductListMap(P: any) {
  const { onClickTab, tab, data, onLoadMore, listData } = P;
  const btnArray = ["전체", "진행예정", "진행중", "종료"];
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.H1>리스트</S.H1>
          <S.SearchBox tab={tab}>
            <ul>
              {btnArray.map((el: any, i: number) => (
                <li id={String(i + 1)} onClick={onClickTab} key={i}>
                  {el}
                </li>
              ))}
            </ul>
          </S.SearchBox>
          <S.Main>
            <div>
              {data?.fetchProductsByPages.map((el: any) => {
                return <ProductListPresenter key={el.id} el={el} tab={tab} />;
              })}
            </div>
            {listData?.countProductByStatus ===
            data?.fetchProductsByPages.length ? (
              <S.LoadText>로드할 상품이 없습니다.</S.LoadText>
            ) : (
              <S.Button onClick={onLoadMore}>
                <span>더보기</span>
              </S.Button>
            )}
          </S.Main>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
