import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Code {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({nullable: false, unique: true})
    code: string = '';
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({nullable: false, unique: true})
    name: string = '';

    @Column({nullable: false, unique: true})
    email: string = '';

    @Column({nullable: false})
    money: number = 0;

    @Column({nullable: false})
    address: string = '';

    /* Cosul de cumparaturi */
    @ManyToMany(() => FoodItem)
    @JoinTable()
    foodItems?: FoodItem[];

}

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({nullable: false, unique: true})
    name: string = '';

    @Column({nullable: false})
    profilePhotoUrl: string = '';

    @Column({nullable: false})
    coverPhotoUrl: string = '';

    @Column({nullable: false, unique: true})
    email: string = '';

    @OneToMany(() => FoodItem, foodItem => foodItem.restaurant)
    foodItems?: FoodItem[];
}

@Entity()
export class FoodItem {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({nullable: false})
    name: string = '';

    @Column({nullable: false})
    price: number = 0;

    @Column({nullable: false})
    details: string = '';

    @Column({nullable: false})
    photoUrl: string = '';

    @ManyToOne(() => Restaurant, restaurant => restaurant.foodItems)
    restaurant: Restaurant = undefined as any;

    @OneToMany(() => Price, priceHistory => priceHistory.foodItem)
    priceHistory?: Price[];
}

@Entity()
export class Price {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({nullable: false})
    value: number = 0;

    @Column({ type: 'timestamptz', nullable: false })
    modifyDate: Date = new Date();

    @ManyToOne(() => FoodItem, foodItem => foodItem.priceHistory, { onDelete: 'CASCADE' })
    foodItem: FoodItem = undefined as any;
}