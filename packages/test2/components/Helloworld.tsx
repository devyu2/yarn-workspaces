export interface IHelloWorldProps {
  message: string;
}

const HelloWorld: React.FC<IHelloWorldProps> = ({ message = "반갑" }) => {
  return <div>{message}</div>;
};

export default HelloWorld;
