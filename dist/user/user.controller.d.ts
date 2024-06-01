import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<{
        email: string;
        password: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        avatarPath: string;
        phone: string;
        favorites: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            description: string;
            price: number;
            image: string;
            categoryId: string;
            userId: string;
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            reference: string;
            userId: string;
        }[];
        _count: {
            favorites: number;
            orders: number;
        };
    }>;
    toggleFavorite(id: string, productId: string): Promise<{
        message: string;
    }>;
}
