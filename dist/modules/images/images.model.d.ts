import { Model } from 'sequelize-typescript';
interface ImageCreationAttrs {
    URL: string;
    downloadURL: string;
    filename: string;
    label: string;
    aspectRatio: string;
}
export declare class Image extends Model<Image, ImageCreationAttrs> {
    id: number;
    filename: string;
    URL: string;
    downloadURL: string;
    label: string;
    aspectRatio: string;
}
export {};
