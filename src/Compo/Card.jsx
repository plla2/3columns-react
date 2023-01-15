import Title from "./Card/Title";
import Text from "./Card/Text";
import MyLink from "./Card/MyLink";
import Image from "./Card/Image";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div></div>
        <Image img={props.mydata.img} />
        <Title title={props.mydata.title} />
        <Text text={props.mydata.desc} />
        <MyLink />
      </div>
    </>
  );
};

export default Card;
