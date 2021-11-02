"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const { BlobServiceClient, generateBlobSASQueryParameters, ContainerSASPermissions, StorageSharedKeyCredential } = require('@azure/storage-blob');
class ContainerController {
    constructor(AZURE_STORAGE_CONNECTION_STRING, accountName, accountKey) {
        this.AZURE_STORAGE_CONNECTION_STRING = AZURE_STORAGE_CONNECTION_STRING;
        this.accountName = accountName;
        this.accountKey = accountKey;
        this.credential = new StorageSharedKeyCredential(accountName, accountKey);
    }
    create(containerName) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const blobServiceClient = BlobServiceClient.fromConnectionString(this.AZURE_STORAGE_CONNECTION_STRING);
                let containerClient = blobServiceClient.getContainerClient(containerName);
                // Se crea el container 
                const createContainerResponse = yield containerClient.create();
                console.log(createContainerResponse);
                // Se establecen las opciones para la key del container
                const options = { containerName: containerClient.containerName,
                    expiresOn: new Date(2022, 1, 1),
                    startsOn: new Date(2020, 1, 1),
                    permissions: ContainerSASPermissions.from({ create: true, delete: true, read: true, write: true })
                };
                // Se genera la llave
                let key = generateBlobSASQueryParameters(options, this.credential).toString();
                console.log(key);
            }
            catch (error) {
            }
        });
    }
}
exports.default = ContainerController;
//# sourceMappingURL=ContainerController.js.map