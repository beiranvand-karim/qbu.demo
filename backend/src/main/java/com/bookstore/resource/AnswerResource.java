package com.bookstore.resource;

import com.bookstore.domain.Answer;
import com.bookstore.domain.User;
import com.bookstore.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    private List<Answer> userAnswers(Authentication authentication) {
        User user = (User) authentication.getPrincipal();
        return answerService.findAllByUserId(user.getId());
    }
}
