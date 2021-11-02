import IFileController from "./IFileController";
export default class BlobController implements IFileController {
    AZURE_STORAGE_CONNECTION_STRING: string;
    constructor(AZURE_STORAGE_CONNECTION_STRING: string);
    delete(container: string, blob: string): Promise<void>;
}
//# sourceMappingURL=BlobController.d.ts.map