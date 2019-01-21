package com.bookstore.service.impl;

import com.bookstore.domain.Answer;
import com.bookstore.repository.AnswerRepository;
import com.bookstore.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;

    @Override
    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }
}
