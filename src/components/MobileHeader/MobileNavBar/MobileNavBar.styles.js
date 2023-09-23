import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  width: Calc(100%);
  border-radius:  0  0 1rem 1rem;
  background: ${({ theme }) => theme.nested.active};
  display: flex;
  align-items: center;
  justify-content: center;

  };
`;

export const Child = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: Calc(100% / 4);
  height: Calc(100% - 2rem);
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.chart.color};

  &:hover {
    color: ${({ theme }) => theme.chart.lineColor};
    cursor: pointer;
  }
`;
