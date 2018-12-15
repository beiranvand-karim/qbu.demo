package com.bookstore.service;

import com.bookstore.domain.Question;

import java.util.List;

public interface QuestionService {
    Question save(Question question);
    List<Question> findAll();
}
