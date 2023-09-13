import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 240px;
  width: "100%";
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;
  padding: 0.25rem;
`;

export const Header = styled.div`
  display: flex;
  font-weight: bold;
`;

export const Status = styled.p`
  flex: none;
  margin-left: auto;
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 0.5rem;
  background: #eee;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Bar = styled.div`
  height: 0.5rem;
  transition: width 0.3s;
`;

export const Text = styled.p`
  color: gray;
`;
