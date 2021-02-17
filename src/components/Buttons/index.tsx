import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const Connect = styled(Button)`
  border-radius: 20px;
  font-weight: 800;
`;

export const ShowMePools = styled.button<{ isDisable?: boolean }>`
  border-radius: 6px;
  background: ${(props) => (props.isDisable ? "#d3d3d3" : "#197bc2")};
  height: 3.5rem;
  padding: 10px;
  text-transform: capitalize;
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

export const MyStakesRewards = styled.button<{ isMyStakes?: boolean }>`
  border-radius: 6px;
  background: #fd434f;
  color: white;
  border: none;
  font-weight: 600;
  padding: 0.5rem;
  display: block;
  margin-top: 10px;
  margin-right: ${(props) => (props.isMyStakes ? "0" : "10")}px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;
