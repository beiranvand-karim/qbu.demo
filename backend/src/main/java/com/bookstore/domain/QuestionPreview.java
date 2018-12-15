package com.bookstore.domain;

public class QuestionPreview extends Question {
    private String username;

    public QuestionPreview() {
    }

    public QuestionPreview(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
