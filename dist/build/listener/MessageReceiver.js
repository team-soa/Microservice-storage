"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amqp = require('amqplib/callback_api');
class MessageReceiver {
    setListener(queue, executer) {
        amqp.connect('amqp://localhost', function (error0, connection) {
            if (error0) {
                throw error0;
            }
            connection.createChannel(function (error1, channel) {
                if (error1) {
                    throw error1;
                }
                channel.assertQueue(queue, {
                    durable: false
                });
                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
                channel.consume(queue, function (msg) {
                    console.log(" [x] Received %s", msg.content.toString());
                    executer.executeMessage(msg.content.toString());
                }, {
                    noAck: true
                });
            });
        });
    }
}
exports.default = MessageReceiver;
//# sourceMappingURL=MessageReceiver.js.map