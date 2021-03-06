import MessageComponent from './message.vue';

let MessageConstructor = Vue.extend(MessageComponent);
let instance;
let instances = [];
let seed = 1;

let message = function(options) {
  if (Vue.prototype.$isServer) return;

  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function() {
    message.close(id, userOnClose);
  };

  instance = new MessageConstructor({
    data: options,
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(function(type) {
  message[type] = function(options) {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;
    return message(options);
  };
});

message.close = function(id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

export default message;
