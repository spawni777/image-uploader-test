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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const delete_image_dto_1 = require("./dto/delete-image.dto");
const path = require("path");
const cfg_1 = require("../../cfg");
const images_register_1 = require("./images.register");
const get_images_query_dto_1 = require("./dto/get-images-query.dto");
const get_images_response_dto_1 = require("./dto/get-images-response.dto");
const upload_images_response_dto_1 = require("./dto/upload-images-response.dto");
const update_image_dto_1 = require("./dto/update-image.dto");
const update_image_response_dto_1 = require("./dto/update-image-response.dto");
let ImagesController = class ImagesController {
    constructor(imagesRegister) {
        this.imagesRegister = imagesRegister;
    }
    async getImages({ offset, limit }) {
        const { images, total } = await this.imagesRegister.getImages(offset, limit);
        return new get_images_response_dto_1.GetImagesResponseDto(images, total);
    }
    async deleteImage(imageDto) {
        await this.imagesRegister.deleteImage(imageDto);
        return 'success';
    }
    async updateImage(imageDto) {
        const updatedImage = await this.imagesRegister.update(imageDto);
        return new update_image_response_dto_1.UpdateImageResponseDto(updatedImage);
    }
    async uploadImage(body, file) {
        const image = await this.imagesRegister.create({
            filename: file.filename,
            label: body.label,
            aspectRatio: body.aspectRatio,
        });
        return new upload_images_response_dto_1.UploadImagesResponseDto(image);
    }
};
exports.ImagesController = ImagesController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_images_query_dto_1.GetImagesQueryDto]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "getImages", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_image_dto_1.DeleteImageDto]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "deleteImage", null);
__decorate([
    (0, common_1.Put)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_image_dto_1.UpdateImageDto]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "updateImage", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: cfg_1.default.uploadImagesFolder,
            filename(req, file, callback) {
                const ext = path.extname(file.originalname);
                callback(null, `${(0, crypto_1.randomUUID)()}${ext}`);
            },
        }),
        fileFilter(req, file, callback) {
            const ext = path.extname(file.originalname);
            const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif'];
            if (allowedExtensions.includes(ext)) {
                return callback(null, true);
            }
            return callback(new Error('Only images are allowed'), false);
        }
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "uploadImage", null);
exports.ImagesController = ImagesController = __decorate([
    (0, common_1.Controller)('/api/images'),
    __metadata("design:paramtypes", [images_register_1.ImagesRegister])
], ImagesController);
//# sourceMappingURL=images.controller.js.map