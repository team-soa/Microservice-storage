import CreateContainerMessageExecuter from "../domainServices/executers/CreateContainerMessageExecuter";
import DeleteFileMessageExecuter from "../domainServices/executers/DeleteFileMessageExecuter";
import MessageReceiver from "../applicationServices/messaging/listener/MessageReceiver";
import RabbitSender from "../applicationServices/messaging/senders/RabbitSender";
import BlobController from "../applicationServices/storageControllers/fileControllers/BlobController";
import ContainerController from "../applicationServices/storageControllers/folderControllers/ContainerController";
import QueuePreSender from "../applicationServices/messaging/PreSender/QueuePreSender";

const AZURE_STORAGE_CONNECTION_STRING = <string>process.env.storage_connection_string;
const accountName = <string>process.env.account_name;
const accountKey = <string>process.env.storage_account_key;
const deleteBlobQueue = "deleteFile"
const createContainerQueue = "createFolder"
const createContainerQueueResponse = "updateUserKey"
const rabbitHost = "amqp://"+<string>process.env.rabbit_url

let messageReceiver = new MessageReceiver(rabbitHost)
let blobController = new BlobController(AZURE_STORAGE_CONNECTION_STRING)
let containerController = new ContainerController(AZURE_STORAGE_CONNECTION_STRING, accountName, accountKey)
let deleteFileMessageExecuter = new DeleteFileMessageExecuter(blobController)
let messageSender = new RabbitSender(rabbitHost)
let queuePreSender = new QueuePreSender(messageSender, createContainerQueueResponse)
let createContainerMessageExecuter = new CreateContainerMessageExecuter(containerController, queuePreSender)

messageReceiver.setListener(deleteBlobQueue, deleteFileMessageExecuter)
messageReceiver.setListener(createContainerQueue, createContainerMessageExecuter)