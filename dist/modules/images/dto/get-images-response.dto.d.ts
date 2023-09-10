import { Image } from '@/modules/images/images.model';
export declare class GetImagesResponseDto {
    private images;
    private total;
    constructor(images: Image[], total: number);
}
