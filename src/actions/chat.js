this.Action = function(message) {
  event({ type: 'Chat', data: message, entityId: me.id, global: false, relativeTo: me.id, position: [0, 0] });
  event({ message: message.message, entityId: me.id, global: false, relativeTo: me.id, position: [0, 0] });
};
