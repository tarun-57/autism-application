import React, { useEffect, useState } from "react";
import styles from "../styles/styles.module.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

export default function FAQ(props) {
  const [questionsData, setQuestionData] = useState(props.data);
  // let heading = "Lorem ipsum dolor sit";
  const [showAccordian, setShowAccordian] = useState([]);
  useEffect(() => {
    let tempData = [];
    tempData[0] = false;
    for (let i = 1; i < questionsData.length; i++) {
      tempData[i] = true;
    }
    console.log(tempData);
    setShowAccordian([...tempData]);
  }, []);
  const handleQuestionClickOpen = (index) => {
    console.log(showAccordian);
    console.log(index, "index");
    const showAccordianTemp = showAccordian.map((div, i) => {
      if (i === index) return !div;
      return true;
    });
    setShowAccordian(showAccordianTemp);
    console.log(showAccordian);
  };

  return (
    <div className={[styles["questions-inner"], "row"].join(" ")}>
      <h1>{props.heading}</h1>
      <div className={[styles["all-questions"], "row"].join(" ")}>
        <Accordion preExpanded={"0"}>
          {questionsData.map((item, index) => {
            return (
              <div key={index + "question"}>
                <AccordionItem
                  uuid={index}
                  className={[styles.accordian__item, ""].join(" ")}
                  onClick={() => handleQuestionClickOpen(index)}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className={[styles.accordian__button, ""].join(" ")}
                    >
                      <h6>
                        {item.question} &nbsp;
                        {showAccordian[index] == false ? (
                          <svg
                        className={styles["caret-down"]}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#fff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="208 96 128 176 48 96"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></polyline>
                      </svg>
                        ) : (
                          <svg
                        className={styles["caret-down"]}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#fff"
                        viewBox="0 0 256 256"
                      >
                        <rect width="256" height="256" fill="none"></rect>
                        <polyline
                          points="208 96 128 176 48 96"
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="16"
                        ></polyline>
                          </svg>
                        )}
                      </h6>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel
                    className={[styles.accordian__para, ""].join(" ")}
                  >
                    {showAccordian[index] == false ? (
                      <p className={styles["para"]}>{item.answer}<br></br></p>
                      
                    ) : null}
                  </AccordionItemPanel>
                  <AccordionItemButton>
                  {showAccordian[index] == false ? (
                      <a href="#" className={styles["buttn"]}>{item.btnText}</a>
                    ) : null}
                  </AccordionItemButton>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
