package com.bookstore.resource;


import com.bookstore.domain.Question;
import com.bookstore.domain.QuestionPreview;
import com.bookstore.domain.User;
import com.bookstore.repository.UserRepository;
import com.bookstore.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/question")
public class QuestionResource {

    @Autowired
    QuestionService questionService;
    @Autowired
    UserRepository userRepository;

    @PostMapping
    public Question createQuestion(@RequestBody Question question, Authentication auth) {
        User user = (User) auth.getPrincipal();
        question.setUserId(user.getId());
        question.setOptionsCount(question.getOptions().size());
        Question savedQuestion = questionService.save(question);
        savedQuestion
                .createDirectory()
                .createOptionImages();
        return savedQuestion;
    }

    @GetMapping
    public List<QuestionPreview> readAllQuestions() {
        List<Question> questionList = questionService.findAll();
        List<QuestionPreview> questionPreviewList = new ArrayList<>();

        for( Question question: questionList) {
            User user = userRepository.findById(question.getUserId());
            questionPreviewList.add(question.toQuestionPreview(user.getUsername()));
        }
        return questionPreviewList;
    }

    @GetMapping("/{id}")
    public Question readQuestion(@PathVariable Long id) {
        return questionService.findById(id);
    }

}
