package com.bookstore.repository;

import com.bookstore.domain.Book;
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
public class BookRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private BookRepository bookRepository;

    @MockBean
    private UserService userService;

    @Test
    public void findByTitleContaining() {
        Book savedInDb = entityManager.persist(getBook());
        Book readFromDb = bookRepository.findOne(savedInDb.getId());
        assertThat(readFromDb).isEqualTo(savedInDb);
    }

    private Book getBook() {
        Book book = new Book();
        book.setTitle("test book");
        return book;
    }
}
