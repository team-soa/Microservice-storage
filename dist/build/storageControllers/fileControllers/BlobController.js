"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const { BlobServiceClient } = require('@azure/storage-blob');
class BlobController {
    constructor(AZURE_STORAGE_CONNECTION_STRING) {
        this.AZURE_STORAGE_CONNECTION_STRING = AZURE_STORAGE_CONNECTION_STRING;
    }
    delete(container, blob) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            try {
                const blobServiceClient = BlobServiceClient.fromConnectionString(this.AZURE_STORAGE_CONNECTION_STRING);
                const containerClient = blobServiceClient.getContainerClient(container);
                yield containerClient.deleteBlob(blob);
            }
            catch (error) {
            }
        });
    }
}
exports.default = BlobController;
//# sourceMappingURL=BlobController.js.map