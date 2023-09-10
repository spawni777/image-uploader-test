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
exports.ImagesRegister = void 0;
const common_1 = require("@nestjs/common");
const images_model_1 = require("./images.model");
const sequelize_1 = require("@nestjs/sequelize");
const firebase_service_1 = require("../../services/firebase/firebase.service");
const cfg_1 = require("../../cfg");
const path = require("path");
let ImagesRegister = class ImagesRegister {
    constructor(imageRepository, firebaseService) {
        this.imageRepository = imageRepository;
        this.firebaseService = firebaseService;
    }
    async create(dto) {
        const { URL, downloadURL } = await this.firebaseService.saveFile({
            filePath: path.resolve(cfg_1.default.uploadImagesFolder, dto.filename),
        });
        return await this.imageRepository.create({
            URL,
            downloadURL,
            label: dto.label,
            filename: dto.filename,
            aspectRatio: dto.aspectRatio,
        });
    }
    async getImages(offset = 0, limit) {
        const total = await this.imageRepository.count();
        const images = await this.imageRepository.findAll({
            order: [['createdAt', 'ASC']],
            offset,
            limit: limit
                ? limit
                : total,
        });
        return { images, total };
    }
    async deleteImage(dto) {
        const image = await images_model_1.Image.findByPk(dto.id);
        if (!image)
            throw new Error('Image not found');
        await this.firebaseService.deleteFile({ filename: image.filename });
        await images_model_1.Image.destroy({ where: { id: dto.id } });
    }
    async update(dto) {
        const image = await images_model_1.Image.findByPk(dto.id);
        image.label = dto.label;
        await image.save();
        return image;
    }
};
exports.ImagesRegister = ImagesRegister;
exports.ImagesRegister = ImagesRegister = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(images_model_1.Image)),
    __param(1, (0, common_1.Inject)(firebase_service_1.FirebaseService)),
    __metadata("design:paramtypes", [Object, firebase_service_1.FirebaseService])
], ImagesRegister);
//# sourceMappingURL=images.register.js.map