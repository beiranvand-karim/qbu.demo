package com.bookstore.resource;

import com.bookstore.domain.Answer;
import com.bookstore.domain.User;
import com.bookstore.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/answer")
public class AnswerResource {

    @Autowired
    private AnswerService answerService;

    @PostMapping
    private Answer createAnswer(@RequestBody Answer answer, Authentication auth) {
        User user = (User) auth.getPrincipal();
        answer.setUserId(user.getId());
        return answerService.save(answer);
    }
}
