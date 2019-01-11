package com.bookstore.service.impl;

import com.bookstore.domain.Question;
import com.bookstore.repository.QuestionRepository;
import com.bookstore.service.QuestionService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QuestionServiceImplTest {

    @MockBean
    private QuestionRepository questionRepository;

    @Autowired
    private QuestionService questionService;

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void save() {
        Question question = new Question();
        question.setTitle("question");
        Mockito.when(questionRepository.save(question)).thenReturn(question);
        assertThat(questionService.save(question)).isEqualTo(question);
    }

    @Test
    public void findAll() {
        Question question1 = new Question();
        question1.setTitle("question1");
        Question question2 = new Question();
        question2.setTitle("question2");
        ArrayList<Question> questions = new ArrayList<>();
        questions.add(question1);
        questions.add(question2);
        Mockito.when(questionRepository.findAll()).thenReturn(questions);
        assertThat(questionService.findAll()).isEqualTo(questions);
    }
}
