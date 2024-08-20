import "./App.css";
import movies from "./assets/movies.json";
import Section from "./components/Section";

// const tab = movies.map((elem) => {
//   console.log("ici 1ere fois ==> " + elem.category);
// });

// console.log(movies);
// const tabTitle = movies.map((elem) => {
//   console.log(elem);
//   console.log(elem.images);
//   const tabImg = elem.images.map((element) => {
//     console.log(element);
//   });
// });

// const tabImg = elem.images.map((elem) => {
//   console.log(elem);
// });

function App() {
  return (
    <>
      <header>
        <img src="/netflix-logo.jpeg" alt="Logo Netflix" />
      </header>
      <main>
        {/* <div className="container"> */}
        {movies.map((elem, index) => {
          return <Section section={elem} key={index} />;
          // return (
          //   <div className="container" key={index}>
          //     <p>{elem.category}</p>
          //     <div className="images">
          //       {elem.images.map((element, index) => {
          //         return (
          //           <img src={element} alt="movie-picture" key={index} />
          //         );
          //       })}
          //     </div>
          //   </div>
          // );
        })}
        {/* </div> */}
      </main>
    </>
  );
}

export default App;
