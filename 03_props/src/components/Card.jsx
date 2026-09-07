const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.imgSrc} alt="img" />
      <h1>{props.userName}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
        deleniti.
      </p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
