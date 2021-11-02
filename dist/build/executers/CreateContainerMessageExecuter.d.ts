import IFolderController from "../storageControllers/folderControllers/IFolderController";
import IMessageExecuter from "./IMessageExecuter";
export default class CreateContainerMessageExecuter implements IMessageExecuter {
    folderController: IFolderController;
    constructor(folderController: IFolderController);
    executeMessage(message: string): void;
}
//# sourceMappingURL=CreateContainerMessageExecuter.d.ts.map