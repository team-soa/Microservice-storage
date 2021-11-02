import CreateContainerMessageExecuter from "./executers/CreateContainerMessageExecuter";
import DeleteFileMessageExecuter from "./executers/DeleteFileMessageExecuter";
import MessageReceiver from "./listener/MessageReceiver";
import BlobController from "./storageControllers/fileControllers/BlobController";
import ContainerController from "./storageControllers/folderControllers/ContainerController";

const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=soakaraokestorage;AccountKey=DRhzPgINTEWI8IeQ9MjMBQol/vEnLbECZDYI53+2yCkQAT8qva6BbbUnFWhaqkA/t4H6omWvlJ1bobcR7O8ETg==;EndpointSuffix=core.windows.net";
const accountName = "soakaraokestorage";
const accountKey = "DRhzPgINTEWI8IeQ9MjMBQol/vEnLbECZDYI53+2yCkQAT8qva6BbbUnFWhaqkA/t4H6omWvlJ1bobcR7O8ETg==";
const deleteBlobQueue = ""
const createContainerQueue = ""

let messageReceiver = new MessageReceiver()
let blobController = new BlobController(AZURE_STORAGE_CONNECTION_STRING)
let containerController = new ContainerController(AZURE_STORAGE_CONNECTION_STRING, accountName, accountKey)
let deleteFileMessageExecuter = new DeleteFileMessageExecuter(blobController)
let createContainerMessageExecuter = new CreateContainerMessageExecuter(containerController)

//messageReceiver.setListener(deleteBlobQueue, deleteFileMessageExecuter)
messageReceiver.setListener(createContainerQueue, createContainerMessageExecuter)