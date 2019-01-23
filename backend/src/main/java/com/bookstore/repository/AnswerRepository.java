package com.bookstore.repository;

import com.bookstore.domain.Answer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AnswerRepository extends CrudRepository<Answer, Long> {
    List<Answer> findAllByUserId(Long id);
}
