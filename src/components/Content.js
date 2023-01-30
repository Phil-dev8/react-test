import Title from "./Title";
import Description from "./Description";

const Content = (props) => {
  return (
    <div className="greybloc">
      <Title title={props.title} />
      <Description text={props.text} />
    </div>
  );
};

export default Content;
