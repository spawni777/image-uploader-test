import { Image } from '@/modules/images/images.model';
import { CreateImageDto } from '@/modules/images/dto/create-image.dto';
import { DeleteImageDto } from '@/modules/images/dto/delete-image.dto';
import { FirebaseService } from '@/services/firebase/firebase.service';
import { UpdateImageDto } from '@/modules/images/dto/update-image.dto';
export declare class ImagesRegister {
    private imageRepository;
    private firebaseService;
    constructor(imageRepository: typeof Image, firebaseService: FirebaseService);
    create(dto: CreateImageDto): Promise<Image>;
    getImages(offset?: number, limit?: number): Promise<{
        images: Image[];
        total: number;
    }>;
    deleteImage(dto: DeleteImageDto): Promise<void>;
    update(dto: UpdateImageDto): Promise<Image>;
}
