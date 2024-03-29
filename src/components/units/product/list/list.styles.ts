import styled from "@emotion/styled";
import { EyeOutlined } from "@ant-design/icons";
import { styleSet } from "../../../../commons/styles/styleSet";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f4f5f9;
  padding-bottom: 100px;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 30px;
  }
`;

export const SearchBox: any = styled.div`
  display: flex;
  justify-content: space-between;
  .ant-input-affix-wrapper {
    width: 30%;
    border-radius: 5px;
    height: 40px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;

    li {
      font-size: ${styleSet.fontSize.s7};
      font-family: ${styleSet.font.B};
      text-align: center;
      width: 110px;
      cursor: pointer;
      background-color: ${styleSet.colors.black};
      color: ${styleSet.colors.white};
      padding: 10px 20px;
      border-radius: 10px;
      &:nth-of-type(${(props: any) => (props.tab ? props.tab : 1)}) {
        background-color: ${styleSet.colors.primary};
        color: ${styleSet.colors.white};
      }
    }
  }
  @media ${styleSet.breakePoints.mobile} {
    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    li {
      font-size: ${styleSet.fontSize.s9} !important;
      width: 110px;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 !important;
      display: flex;
      justify-content: center;
      white-space: nowrap;
      word-break: keep-all;
      &:nth-of-type(${(props: any) => (props.tab ? props.tab : 1)}) {
        border-radius: 10px !important;
      }
    }
  }
`;

export const H1 = styled.h1`
  font-size: ${styleSet.fontSize.s1};
  font-family: ${styleSet.font.B};
  text-align: center;
  padding-block: 50px;

  @media ${styleSet.breakePoints.mobile} {
    padding-block: 10px;
    text-align: left;
  }
`;

export const Wrapper = styled.div`
  max-width: 1460px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Scroll = styled.h1`
  display: block;
  margin: 0 auto;
`;
export const Button = styled.button`
  width: 50%;
  height: 60px;
  font-size: ${styleSet.fontSize.s7};
  border: 1px solid ${styleSet.colors.primary};
  margin-top: 50px;
  overflow: hidden;
  position: relative;
  left: 50%;
  background-color: ${styleSet.colors.primary};
  transform: translateX(-50%);
  &&::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5%;
    left: -10%;
    width: 0;
    height: 120%;
    background: ${styleSet.colors.aftercolor};
    transition: all 0.3s ease;
    transform: skewX(15deg);
  }
  &&:hover {
    color: ${styleSet.colors.white};
    ::before {
      width: 120%;
    }
    span {
      color: ${styleSet.colors.white};
    }
  }
  span {
    display: block;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    color: ${styleSet.colors.white};
  }
`;

export const Main = styled.main`
  margin-top: 50px;
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 60px;
  }

  @media ${styleSet.breakePoints.mobile} {
    .infinite-scroll {
      flex-direction: column;
    }
  }
`;

export const Section = styled.section`
  cursor: pointer;
  max-width: calc(50% - 30px);
  max-height: 800px;
  overflow: hidden;
  position: relative;
  transition: padding 0.34s ease-in-out;
  border: 1px dashed #ccc;
  box-shadow: 0 0.8rem 2rem rgb(0 0 0 / 5%);
  &:hover .bg_layer {
    transition: 0.8s;
    opacity: 1;
  }
  @media ${styleSet.breakePoints.mobile} {
    min-width: 100%;
  }
`;

export const User = styled.div`
  padding: 25px;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  background: #fff;

  img {
    width: 75px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
    border: 1px solid #f5f5f5;
  }
  @media ${styleSet.breakePoints.mobile} {
    padding: 10px;
  }
`;

export const UserName = styled.p`
  font-size: ${styleSet.fontSize.s6};
`;

export const BgLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

export const H2 = styled.h2`
  color: ${styleSet.colors.white};
  font-size: ${styleSet.fontSize.s2};
`;

export const ProdImg = styled.div`
  height: 450px;
  overflow: hidden;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    width: 700px;
  }
  @media ${styleSet.breakePoints.mobile} {
    img {
      width: -webkit-fill-available;
    }
  }
`;

export const PriceSale = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  top: 0;
  border-radius: 0px 0px 0px 80px;
  background: ${styleSet.colors.primary};
  width: 100px;
  height: 100px;
  color: ${styleSet.colors.white};
  font-family: ${styleSet.font.B};
  font-size: ${styleSet.fontSize.s4};
`;

export const View = styled(EyeOutlined)`
  font-size: ${styleSet.fontSize.s7} !important;
`;

export const Bottom = styled.section`
  padding: 20px 25px;
  background: #fff;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  li {
    display: flex;
    align-items: center;
  }
  span {
    font-size: ${styleSet.fontSize.s9};
    margin-right: 10px;
  }
`;

export const Time = styled.li`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  span {
    margin-right: 0;
  }
`;

export const ProdName = styled.h1`
  font-size: ${styleSet.fontSize.s6};
  font-family: ${styleSet.font.EB};
  padding-bottom: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 620px;
`;

export const Price = styled.p`
  font-size: ${styleSet.fontSize.s5};
  font-family: ${styleSet.font.B};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    text-decoration-line: line-through;
    color: ${styleSet.colors.red};
    font-size: ${styleSet.fontSize.s8};

    font-family: ${styleSet.font.B};
  }
`;

export const New = styled.img`
  position: absolute;
  right: 5%;
  top: 3%;

  @media ${styleSet.breakePoints.mobile} {
    top: 2%;
  }
`;

export const LoadText = styled.p`
  padding-top: 5rem;
  font-size: ${styleSet.fontSize.s7};
  text-align: center;
`;
