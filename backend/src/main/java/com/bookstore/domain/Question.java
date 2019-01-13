package com.bookstore.domain;


import com.bookstore.domain.graphics.ImageFromString;
import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import java.io.File;
import java.util.List;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String text;
    private Long prize;
    private Long userId;

    @JsonInclude()
    @Transient
    private List<String> options;

    public Question() {
    }

    public QuestionPreview toQuestionPreview(String username) {
        QuestionPreview questionPreview = new QuestionPreview();
        questionPreview.setId(id);
        questionPreview.setTitle(title);
        questionPreview.setText(text);
        questionPreview.setPrize(prize);
        questionPreview.setUserId(userId);
        questionPreview.setUsername(username);
        return questionPreview;
    }

    public Question createDirectory() {
        boolean mkdirs = new File("src/main/resources/static/question/" + id).mkdirs();
        return this;
    }

    public void createOptionImages() {
        for (int i = 0; i < options.size(); i++) {
            ImageFromString.create(options.get(i), id, i);
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getPrize() {
        return prize;
    }

    public void setPrize(Long prize) {
        this.prize = prize;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }
}
