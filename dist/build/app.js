"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const CreateContainerMessageExecuter_1 = (0, tslib_1.__importDefault)(require("./executers/CreateContainerMessageExecuter"));
const DeleteFileMessageExecuter_1 = (0, tslib_1.__importDefault)(require("./executers/DeleteFileMessageExecuter"));
const MessageReceiver_1 = (0, tslib_1.__importDefault)(require("./listener/MessageReceiver"));
const BlobController_1 = (0, tslib_1.__importDefault)(require("./storageControllers/fileControllers/BlobController"));
const ContainerController_1 = (0, tslib_1.__importDefault)(require("./storageControllers/folderControllers/ContainerController"));
const AZURE_STORAGE_CONNECTION_STRING = "DefaultEndpointsProtocol=https;AccountName=soakaraokestorage;AccountKey=DRhzPgINTEWI8IeQ9MjMBQol/vEnLbECZDYI53+2yCkQAT8qva6BbbUnFWhaqkA/t4H6omWvlJ1bobcR7O8ETg==;EndpointSuffix=core.windows.net";
const accountName = "soakaraokestorage";
const accountKey = "DRhzPgINTEWI8IeQ9MjMBQol/vEnLbECZDYI53+2yCkQAT8qva6BbbUnFWhaqkA/t4H6omWvlJ1bobcR7O8ETg==";
const deleteBlobQueue = "";
const createContainerQueue = "";
let messageReceiver = new MessageReceiver_1.default();
let blobController = new BlobController_1.default(AZURE_STORAGE_CONNECTION_STRING);
let containerController = new ContainerController_1.default(AZURE_STORAGE_CONNECTION_STRING, accountName, accountKey);
let deleteFileMessageExecuter = new DeleteFileMessageExecuter_1.default(blobController);
let createContainerMessageExecuter = new CreateContainerMessageExecuter_1.default(containerController);
//messageReceiver.setListener(deleteBlobQueue, deleteFileMessageExecuter)
messageReceiver.setListener(createContainerQueue, createContainerMessageExecuter);
//# sourceMappingURL=app.js.map