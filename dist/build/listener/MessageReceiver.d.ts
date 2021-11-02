import IMessageExecuter from "../executers/IMessageExecuter";
import IMessageReceiver from "./ImessageReceiver";
export default class MessageReceiver implements IMessageReceiver {
    setListener(queue: string, executer: IMessageExecuter): void;
}
//# sourceMappingURL=MessageReceiver.d.ts.map