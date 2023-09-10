"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebaseService = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase-admin/app");
const storage_1 = require("firebase-admin/storage");
const promises_1 = require("fs/promises");
let FirebaseService = class FirebaseService {
    constructor() {
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)({
                privateKey: process.env.FIREBASE_PRIVATE_KEY
                    .replace(/\\n/g, '\n'),
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                projectId: process.env.FIREBASE_PROJECT_ID,
            }),
            storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`
        });
        this.storage = (0, storage_1.getStorage)();
    }
    async saveFile(dto) {
        const snapshot = await this.storage.bucket().upload(dto.filePath, { public: true });
        const fileURL = await (0, storage_1.getDownloadURL)(snapshot[0]);
        await (0, promises_1.unlink)(dto.filePath);
        return {
            URL: fileURL,
            downloadURL: snapshot[0].metadata.mediaLink,
        };
    }
    async deleteFile(dto) {
        await this.storage.bucket().file(dto.filename).delete();
    }
};
exports.FirebaseService = FirebaseService;
exports.FirebaseService = FirebaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FirebaseService);
//# sourceMappingURL=firebase.service.js.map