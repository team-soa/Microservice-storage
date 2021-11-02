import IMessageExecuter from "../executers/IMessageExecuter";
export default interface IMessageReceiver {
    setListener(queue: string, executer: IMessageExecuter): void;
}
//# sourceMappingURL=ImessageReceiver.d.ts.map