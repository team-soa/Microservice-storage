import IFileController from "./IFileController";

const { BlobServiceClient } = require('@azure/storage-blob');

export default class BlobController implements IFileController{
  AZURE_STORAGE_CONNECTION_STRING: string
  
  constructor(AZURE_STORAGE_CONNECTION_STRING: string){
      this.AZURE_STORAGE_CONNECTION_STRING = AZURE_STORAGE_CONNECTION_STRING
  }
  async delete(container:string , blob: string):Promise<void>{
    try{
        const blobServiceClient = BlobServiceClient.fromConnectionString(this.AZURE_STORAGE_CONNECTION_STRING);
        const containerClient =  blobServiceClient.getContainerClient(container)  
        await containerClient.deleteBlob(blob)
      }
      catch(error){
    }
  }
}