package com.bookstore.service.impl;

import com.bookstore.domain.Book;
import com.bookstore.repository.BookRepository;
import com.bookstore.service.BookService;
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

import static org.junit.Assert.*;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BookServiceImplTest {

    @MockBean
    private BookRepository bookRepository;

    @Autowired
    private BookService bookService;

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void findAll() {
        Book book1 = new Book();
        book1.setTitle("book1");
        Book book2 = new Book();
        book2.setTitle("book2");
        ArrayList<Book> books = new ArrayList<>();
        books.add(book1);
        books.add(book2);
        Mockito.when(bookRepository.findAll()).thenReturn(books);
        assertThat(bookService.findAll()).isEqualTo(books);
    }

    @Test
    public void findOne() {
        final Long id = 600851475143L;
        Book book = new Book();
        book.setTitle("test book");
        book.setId(id);
        Mockito.when(bookRepository.findOne(id)).thenReturn(book);
        assertThat(bookService.findOne(id)).isEqualTo(book);
    }

    @Test
    public void save() {
        Book book = new Book();
        book.setTitle("test book");
        Mockito.when(bookRepository.save(book)).thenReturn(book);
        assertThat(bookService.save(book)).isEqualTo(book);
    }

    @Test
    public void blurrySearch() {
    }

    @Test
    public void removeOne() {
        final Long id = 600851475143L;
        Book book = new Book();
        book.setTitle("test book");
        book.setId(id);
        Mockito.when(bookRepository.findOne(id)).thenReturn(book);
        Mockito.when(bookRepository.exists(id)).thenReturn(false);
        assertFalse(bookRepository.exists(id));
    }
}
