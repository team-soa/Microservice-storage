export default interface IFolderController{
    create(folderName: string): Promise<string>
}