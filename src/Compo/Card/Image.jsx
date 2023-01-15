import "./image.css";
function Image(props) {
  // console.log(props.img);
  return (
    <>
      <div>
        <img className="icon" src={props.img} alt="img" />
      </div>
    </>
  );
}

export default Image;
