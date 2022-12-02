import React from "react";
import FAQ from "../../components/FAQ";
import { data, heading } from "../../components/HelperData";

export default function index() {
  return (
    <>
      {/* <div className={[styles["questions"], "container"].join(" ")}> */}
        {/* <div className={[styles[" "], "row"].join(" ")}> */}
          {/* <div className={[styles[""], "col-md-12"].join(" ")}> */}
            <FAQ data={data} heading = {heading}/>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
}
