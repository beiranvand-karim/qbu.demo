package com.bookstore.service.impl;

import com.bookstore.domain.Question;
import com.bookstore.repository.QuestionRepository;
import com.bookstore.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    QuestionRepository questionRepository;

    public Question save(Question question) {
        return questionRepository.save(question);
    }

    @Override
    public List<Question> findAll() {
        return  (List<Question>) questionRepository.findAll();
    }
}