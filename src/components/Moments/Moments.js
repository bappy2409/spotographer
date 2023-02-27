import AllImages from "../AllImages/AllImages";
import SeactionHeading from "../SectionHeading/SeactionHeading";
import "./Moments.css";

const Moments = () => {
  return (
    <section className="moments-area">
      <SeactionHeading heading={"Some Moments"} text={"Text"} />
      <AllImages />
    </section>
  );
};

export default Moments;
