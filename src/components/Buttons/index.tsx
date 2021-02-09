import styled from "styled-components";

export const Connect = styled.button`
  border-radius: 6px;
  background: #4bb543;
  padding: 10px;
  font-weight: 800;
  color: white;
  border: 0;
  &: focus {
    background: #4bb543;
  }
`;

export const ShowMePools = styled.button<{ isDisable: boolean }>`
  border-radius: 6px;
  background: ${(props) => (props.isDisable ? "#d3d3d3" : "#197bc2")};
  height: 3.5rem;
  padding: 10px;
  border-radius: 6px;
  border: 0;
  width: 100%;
  margin-top: 16px;
  color: ${(props) => (props.isDisable ? "#4d4141" : "#f5e4e4")};
  font-weight: 800;
  cursor: ${(props) => (props.isDisable ? "not-allowed" : "pointer")}!important;
`;

export const AccountDetails = styled.button`
  border-radius: 6px;
  background: #dedede;
  color: #222;
  border: none;
  font-weight: 600;
  align-items: center;
  padding: 0.5rem;
`;
