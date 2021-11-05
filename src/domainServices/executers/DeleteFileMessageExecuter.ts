import StorageOptions from "../../domainModels/StorageOptions";
import IFileController from "../../applicationServices/storageControllers/fileControllers/IFileController";
import IMessageExecuter from "./IMessageExecuter";

export default class DeleteFileMessageExecuter implements IMessageExecuter{
    fileController: IFileController
    constructor(fileController: IFileController){
        this.fileController = fileController
    }
    executeMessage(message: string): void {
        try{
            let options: StorageOptions = JSON.parse(message)
            this.fileController.delete(options.folder, options.file)
        }catch{
            
        }
    }
}