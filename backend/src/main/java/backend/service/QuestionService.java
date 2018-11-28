package backend.service;

import backend.model.Question;
import backend.repository.QuestionRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    public Question createQuestion(Question question) {
        return questionRepository.save(question);
    }

    public Question readQuestion(ObjectId id) {
        return questionRepository.findById(id);
    }

    public List<Question> readAllQuestions() {
        return questionRepository.findAll();
    }
}
