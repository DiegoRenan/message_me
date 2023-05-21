import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("Connection ready!")
  },

  disconnected() {
    console.log("Disconnected ready!")
  },

  received(data) {
    alert(data.foo)
  }
});
