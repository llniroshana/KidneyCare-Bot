import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "KidneyCareBot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to know?", {
      widget: "learningOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "What is CKD",
            url:
              "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/what-is-chronic-kidney-disease",
            id: 1,
          },
          {
            text: "Symptoms of CKD",
            url:
              "https://www.nhs.uk/conditions/kidney-disease/symptoms/",
            id: 2,
          },
          {
            text: "Stages of Kidney",
            url: "https://www.freseniuskidneycare.com/kidney-disease/stages",
            id: 3,
          },


        ],
      },
    },
  ],
};

export default config;
