package backend.repository;

import backend.model.Question;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends MongoRepository<Question, String> {
    Question findById(ObjectId id);
}
