import React from "react";
import FAQ from "../../components/FAQ";
import { data, heading } from "../../components/AutismData";
import style from "../../styles/Autistic.module.css"

export default function index() {
  return (
    <>
      {/* <div className={[styles["questions"], "container"].join(" ")}> */}
        {/* <div className={[styles[" "], "row"].join(" ")}> */}
          {/* <div className={[styles[""], "col-md-12"].join(" ")}> */}
          <h1 className={style["heading"]}>Activities we can help you with:</h1>
          <section className={style["body-sec"]}>
            <div className={[style["section"],["row"]].join(" ")}>
              <a className={style["btn"]} href="/new"><img src="https://images.herzindagi.info/image/2020/Jul/Toilet-Without-A-Plumber.jpg" height={200} width={300}></img></a>
              <a className={style["btn"]} href="/autistic"><img src="https://5.imimg.com/data5/TC/MD/MY-830981/commercial-elevator-500x500.jpg" height={200} width={300}></img></a>
            </div>
            <div className={[style["section"],["row"]].join(" ")}>
              <a className={style["btn"]} href="/autistic"><img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Front_view_of_an_illuminated_outdoor_escalator%2C_Shinjuku_Station%2C_Tokyo.jpg" height={200} width={300}></img></a>
              <a className={style["btn"]} href="/autistic"><img src="https://4.imimg.com/data4/CQ/CE/MY-26282907/contemporary-revolving-door-500x500.jpg" height={200} width={300}></img></a>
            </div>
            <div className={[style["section"],["row"]].join(" ")}>
              <a className={style["btn"]} href="/autistic"><img src="https://image.geze.com/im/StageSpezial/pboxx-pixelboxx-43685/Des" height={200} width={300}></img></a>
              <a className={style["btn"]} href="/autistic"><img src="https://www.rd.com/wp-content/uploads/2022/05/GettyImages-1029734910-MW-Edit.jpg?fit=700,1024" height={200} width={300}></img></a>
            </div>
          </section>
            <FAQ data={data} heading = {heading}/>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
