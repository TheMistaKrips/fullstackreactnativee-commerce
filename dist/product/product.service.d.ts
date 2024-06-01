import { CategoryService } from 'src/category/category.service';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductService {
    private prisma;
    private categoryService;
    constructor(prisma: PrismaService, categoryService: CategoryService);
    getAll(searchTerm?: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string;
        slug: string;
        description: string;
        price: number;
        categoryId: string;
        userId: string;
    }[]>;
    search(searchTerm: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string;
        slug: string;
        description: string;
        price: number;
        categoryId: string;
        userId: string;
    }[]>;
    bySlug(slug: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string;
        slug: string;
        description: string;
        price: number;
        categoryId: string;
        userId: string;
    }>;
    byCategory(categorySlug: string): Promise<{
        user: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            name: string;
            avatarPath: string;
            phone: string;
        };
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            slug: string;
            image: string;
        };
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string;
        slug: string;
        description: string;
        price: number;
        categoryId: string;
        userId: string;
    }[]>;
    create(): Promise<string>;
    update(id: string, dto: ProductDto): Promise<{
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
    }>;
    delete(id: string): Promise<{
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
    }>;
}
