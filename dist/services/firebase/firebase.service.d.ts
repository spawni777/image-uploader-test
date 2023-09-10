import { SaveFileDto } from '@/services/firebase/dto/save-file.dto';
import { DeleteFileDto } from '@/services/firebase/dto/delete-file.dto';
export declare class FirebaseService {
    private storage;
    constructor();
    saveFile(dto: SaveFileDto): Promise<{
        URL: string;
        downloadURL: any;
    }>;
    deleteFile(dto: DeleteFileDto): Promise<void>;
}
