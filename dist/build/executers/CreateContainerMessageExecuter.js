"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateContainerMessageExecuter {
    constructor(folderController) {
        this.folderController = folderController;
    }
    executeMessage(message) {
        try {
            let options = JSON.parse(message);
            this.folderController.create(options.folder);
        }
        catch (_a) {
        }
    }
}
exports.default = CreateContainerMessageExecuter;
//# sourceMappingURL=CreateContainerMessageExecuter.js.map