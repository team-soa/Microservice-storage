import IFileController from "../storageControllers/fileControllers/IFileController";
import IMessageExecuter from "./IMessageExecuter";
export default class DeleteFileMessageExecuter implements IMessageExecuter {
    fileController: IFileController;
    constructor(fileController: IFileController);
    executeMessage(message: string): void;
}
//# sourceMappingURL=DeleteFileMessageExecuter.d.ts.map