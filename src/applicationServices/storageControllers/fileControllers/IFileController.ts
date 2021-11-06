export default interface IFileController{
    delete(folder: string, file: string): Promise<void>
}