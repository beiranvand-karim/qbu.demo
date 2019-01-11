package com.bookstore.repository;

import com.bookstore.domain.Question;
import com.bookstore.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
public class QuestionRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private QuestionRepository questionRepository;

    @MockBean
    private UserService userService;

    @Test
    public void saveQuestionTest() {
        Question savedQuestion = entityManager.persist(createQuestion());
        Question readQuestion = questionRepository.findOne(savedQuestion.getId());
        assertThat(readQuestion).isEqualTo(savedQuestion);
    }

    private Question createQuestion() {
        Question question = new Question();
        question.setTitle("test");
        return question;
    }

}
