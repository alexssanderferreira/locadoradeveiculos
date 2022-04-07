import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
}

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByUsername(): Promise<User[]>;
}

export { IUsersRepository };
