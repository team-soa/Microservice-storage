import ContainerCreationResponse from "../models/ContainerCreationResponse";
import StorageOptions from "../models/StorageOptions";
import IPreSender from "../presender/IPreSender";
import IFolderController from "../storageControllers/folderControllers/IFolderController";
import IMessageExecuter from "./IMessageExecuter";

export default class CreateContainerMessageExecuter implements IMessageExecuter{
    folderController: IFolderController
    sender: IPreSender
    constructor(folderController: IFolderController, sender:IPreSender){
        this.folderController = folderController
        this.sender = sender
    }
    async executeMessage(message: string): Promise<void> {
        try{
            let options: StorageOptions = JSON.parse(message)
            let key = await this.folderController.create(options.folder)
            let responseMessageModel:ContainerCreationResponse = {key, username:options.folder}
            let responseMessage = JSON.stringify(responseMessageModel) 
            this.sender.send(responseMessage)
        }catch(e:any){
            console.log(e)
        }
    }
}