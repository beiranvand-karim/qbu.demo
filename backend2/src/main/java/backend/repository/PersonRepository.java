package backend.repository;

import backend.model.Person;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends MongoRepository<Person, String> {
    Person findByFirstName(String firstName);
    Person findById(ObjectId id);
    String deleteById(ObjectId id);
}
