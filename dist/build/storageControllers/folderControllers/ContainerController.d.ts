import IFolderController from "./IFolderController";
export default class ContainerController implements IFolderController {
    AZURE_STORAGE_CONNECTION_STRING: string;
    accountName: string;
    accountKey: string;
    credential: any;
    constructor(AZURE_STORAGE_CONNECTION_STRING: string, accountName: string, accountKey: string);
    create(containerName: string): Promise<void>;
}
//# sourceMappingURL=ContainerController.d.ts.map