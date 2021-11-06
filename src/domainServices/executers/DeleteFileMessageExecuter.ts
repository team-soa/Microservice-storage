import StorageOptions from "../../domainModels/StorageOptions";
import IFileController from "../../applicationServices/storageControllers/fileControllers/IFileController";
import IMessageExecuter from "./IMessageExecuter";

export default class DeleteFileMessageExecuter implements IMessageExecuter{
    fileController: IFileController
    constructor(fileController: IFileController){
        this.fileController = fileController
    }
    async executeMessage(message: string): Promise<void> {
        try{
            let options: StorageOptions = JSON.parse(message)
            await this.fileController.delete(options.folder, options.file)
        }catch{
            
        }
    }
}