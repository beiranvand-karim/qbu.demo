package backend.repository;

import backend.model.Pet;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PetRepository extends MongoRepository<Pet, String> {
    Pet findById(ObjectId id);
    void deleteById(ObjectId id);
}
