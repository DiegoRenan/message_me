import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("Connection ready!")
  },

  disconnected() {
    console.log("Disconnected ready!")
  },

  received(data) {
    const ul = document.getElementById('message-container');
    ul.insertAdjacentHTML('beforeend', data.mod_message)
  }
});
