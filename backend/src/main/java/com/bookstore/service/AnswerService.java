package com.bookstore.service;

import com.bookstore.domain.Answer;

import java.util.List;

public interface AnswerService {
    Answer save(Answer answer);
    List<Answer> findAllByUserId(Long id);
}
