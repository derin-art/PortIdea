import Header from "./header";

export default function Wrapper(props) {
  return (
    <div className="">
      <Header></Header>
      <div className="">{props.children}</div>
    </div>
  );
}
