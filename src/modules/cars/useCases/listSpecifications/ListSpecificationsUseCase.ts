import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private categoriesRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export { ListSpecificationsUseCase };
