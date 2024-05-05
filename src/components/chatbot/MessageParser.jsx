class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(messageText) {
    this.sendToAPI(messageText, this.state);
  }

  async sendToAPI(messageText, state) {
    const response = await fetch('https://44.196.239.182/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: messageText,
        conversationState: state.messages,
      }),
    });

    const data = await response.json();
    this.actionProvider.handleApiResponse(data);
  }
}

export default MessageParser