import styled from "styled-components";
import user from "../../assets/user.png";

export const Card = styled.main`
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 4px #5e738e80;
  padding: 40px;
  border-radius: 4px;
  background-color: var(--color9);
  margin: 4rem auto;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

//background-color: var(--color9);
export const CardFilters = styled.main`
  max-width: 300px;
  box-shadow: 0 4px 4px #5e738e80;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

export const ImageCircle = styled.img`
  display: block;
  border-radius: 50%;
  height: 96px;
  width: 96px;
`;

interface params {
  style?: React.CSSProperties;
}
export const ImageUser = (params: params) => {
  return <ImageCircle src={user} style={params.style} />;
};

export const Input = styled.input`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  display: block;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  margin-top: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  margin-top: 0.5rem;
  align-self: flex-start;
  color: var(--color3);
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.375rem 0.75rem;
  color: var(--color9);
  background-color: var(--color3);
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: var(--color2);
  }
  &:disabled {
    background-color: Var(--color8)
  }
`;

export const ButtonRed = styled.button`
  margin-top: 0.5rem;
  padding: 0.375rem 0.75rem;
  color: var(--color9);
  background-color: var(--colorError);
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;

export const Error = styled.p`
  color: red;
`;

export const Message = styled.div`
  border-radius: 5px;
  background-color: var(--color1);
  color: var(--color2);
  text-align: center;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
`;

export const MessageError = styled(Message)`
  background-color: var(--colorError);
  color: #fff;
`;
