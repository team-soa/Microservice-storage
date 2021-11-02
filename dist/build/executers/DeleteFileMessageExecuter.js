"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteFileMessageExecuter {
    constructor(fileController) {
        this.fileController = fileController;
    }
    executeMessage(message) {
        let options = JSON.parse(message);
        this.fileController.delete(options.folder, options.file);
    }
}
exports.default = DeleteFileMessageExecuter;
//# sourceMappingURL=DeleteFileMessageExecuter.js.map