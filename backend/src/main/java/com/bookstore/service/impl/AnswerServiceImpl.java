package com.bookstore.service.impl;

import com.bookstore.domain.Answer;
import com.bookstore.domain.Question;
import com.bookstore.repository.AnswerRepository;
import com.bookstore.repository.QuestionRepository;
import com.bookstore.service.AnswerService;
import com.bookstore.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuestionService questionService;

    @Override
    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }

    @Override
    public List<Answer> findAllByUserId(Long id) {
        List<Answer> answers = answerRepository.findAllByUserId(id);
        for(Answer answer: answers){
            Question question = questionRepository.findById(answer.getQuestionId());
            answer.setQuestionTitle(question.getTitle());
            answer.setOption(questionService.createOptionAddress(question.getId(), answer.getSelectedOption()));
        }
        return answers;
    }
}
