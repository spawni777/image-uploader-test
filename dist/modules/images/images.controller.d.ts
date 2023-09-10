/// <reference types="multer" />
import { DeleteImageDto } from '@/modules/images/dto/delete-image.dto';
import { ImagesRegister } from '@/modules/images/images.register';
import { GetImagesQueryDto } from '@/modules/images/dto/get-images-query.dto';
import { GetImagesResponseDto } from '@/modules/images/dto/get-images-response.dto';
import { UploadImagesResponseDto } from '@/modules/images/dto/upload-images-response.dto';
import { UpdateImageDto } from '@/modules/images/dto/update-image.dto';
import { UpdateImageResponseDto } from '@/modules/images/dto/update-image-response.dto';
export declare class ImagesController {
    private imagesRegister;
    constructor(imagesRegister: ImagesRegister);
    getImages({ offset, limit }: GetImagesQueryDto): Promise<GetImagesResponseDto>;
    deleteImage(imageDto: DeleteImageDto): Promise<string>;
    updateImage(imageDto: UpdateImageDto): Promise<UpdateImageResponseDto>;
    uploadImage(body: {
        label: string;
        aspectRatio: string;
    }, file: Express.Multer.File): Promise<UploadImagesResponseDto>;
}
