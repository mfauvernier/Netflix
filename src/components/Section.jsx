const Section = (props) => {
  //   console.log(props);
  //   console.log(props.section);
  console.log(props.section.images);
  return (
    <div className="container">
      <p>{props.section.category}</p>
      <div className="images">
        {props.section.images.map((elem, index) => {
          return <img src={elem} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Section;
