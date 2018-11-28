package backend.controller;

import backend.model.Question;
import backend.service.QuestionService;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @PostMapping("/question")
    public Question createQuestion(@RequestBody Question question) {
        return questionService.createQuestion(question);
    }

    @GetMapping("/question/{id}")
    public Question readQuestion(@PathVariable ObjectId id) {
        return questionService.readQuestion(id);
    }

    @GetMapping("/question")
    public List<Question> readAllQuestions() {
        return questionService.readAllQuestions();
    }
}

