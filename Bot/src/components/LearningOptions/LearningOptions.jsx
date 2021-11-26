import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Kidney disease",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "Kidney Transplant", handler: () => {}, id: 2 },
    //{ text: "CKD Elder", handler: () => {}, id: 4 },
    { text: "Chronic Kidney Diagnosis", handler: () => {}, id: 3 },
    //{ text: "CKD Risk", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
