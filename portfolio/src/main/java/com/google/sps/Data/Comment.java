package com.google.sps.data;

public final class Comment {

    private final String message;
    private final String name;

    public Comment(String name, String message) {
        this.name = name;
        this.message = message;
    }
}