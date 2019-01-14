package com.bookstore.service.impl;

import com.bookstore.domain.Question;
import com.bookstore.repository.QuestionRepository;
import com.bookstore.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    Environment environment;

    public Question save(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> findAll() {
        return (List<Question>) questionRepository.findAll();
    }

    @Override
    public Question findById(Long id) {
        ArrayList<String> options = new ArrayList<>();
        String port = environment.getProperty("local.server.port");
        Question question = questionRepository.findById(id);
        for (int i = 0; i < question.getOptionsCount(); i++) {
            options.add("http://localhost:"+ port +"/question/" + question.getId() + "/" + i + ".png");
        }
        question.setOptions(options);
        return question;
    }
}
