class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, Friend.");
    this.updateChatbotState(greetingMessage);
  }

  error() {
    const err = this.createChatBotMessage("Sorry, please check and try again");
    this.updateChatbotState(err);
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Great, I've got the following resources for you on kidney disease",
      {
        widget: "javascriptLinks",
      }
    );

    this.updateChatbotState(message);
  };


  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
