import StorageOptions from "../models/StorageOptions";
import IFolderController from "../storageControllers/folderControllers/IFolderController";
import IMessageExecuter from "./IMessageExecuter";

export default class CreateContainerMessageExecuter implements IMessageExecuter{
    folderController: IFolderController
    constructor(folderController: IFolderController){
        this.folderController = folderController
    }
    executeMessage(message: string): void {
        try{
            let options: StorageOptions = JSON.parse(message)
            this.folderController.create(options.folder)
        }catch{

        }
    }
}