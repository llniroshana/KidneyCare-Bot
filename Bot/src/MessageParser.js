// MessageParser starter code in MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("Hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("HI")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("hey")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("kidney")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("kidney disease")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("symptoms")) {
      this.actionProvider.handleJavascriptList();
    }

    if (lowerCaseMessage.includes("ckd stages")) {
      this.actionProvider.handleJavascriptList();
    }

    if(lowerCaseMessage.includes("w")) {
      this.actionProvider.error();
    }

    if(lowerCaseMessage.includes("f")) {
      this.actionProvider.error();
    }

    if(lowerCaseMessage.includes("b")) {
      this.actionProvider.error();
    }

    if(lowerCaseMessage.includes("q")) {
      this.actionProvider.error();
    }


  }
}

export default MessageParser;
