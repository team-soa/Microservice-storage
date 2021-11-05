import IFolderController from "./IFolderController";

const { BlobServiceClient, generateBlobSASQueryParameters, ContainerSASPermissions, StorageSharedKeyCredential} = require('@azure/storage-blob');

export default class ContainerController implements IFolderController{
    AZURE_STORAGE_CONNECTION_STRING: string
    accountName: string
    accountKey: string
    credential: any
    
    constructor(AZURE_STORAGE_CONNECTION_STRING: string, accountName: string, accountKey: string){
        this.AZURE_STORAGE_CONNECTION_STRING = AZURE_STORAGE_CONNECTION_STRING
        this.accountName = accountName
        this.accountKey = accountKey
        this.credential = new StorageSharedKeyCredential(accountName, accountKey)
    }

    async create(containerName: string): Promise<string>{
        const blobServiceClient = BlobServiceClient.fromConnectionString(this.AZURE_STORAGE_CONNECTION_STRING);
        let containerClient = blobServiceClient.getContainerClient(containerName);
        // Se crea el container 
        const createContainerResponse = await containerClient.create();
        console.log(createContainerResponse)
        // Se establecen las opciones para la key del container
        const options = {containerName: containerClient.containerName,
            expiresOn: new Date(2022, 1, 1), 
            startsOn: new Date(2020, 1, 1), 
            permissions: ContainerSASPermissions.from({create: true, delete: true, read: true, write: true})
        }
        // Se genera la llave
        let key = generateBlobSASQueryParameters(options, this.credential).toString()
        return key
    }
}