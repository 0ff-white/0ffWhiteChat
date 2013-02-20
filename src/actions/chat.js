this.Action = function (args) {
  var message = { username: me.name, message: args.message };
  event({ speech: true, type: "Chat", message: message.message, data: message, entityId: me.id });
};
