package com.google.sps.data;

public final class Comment {

    private final String message;
    private final String name;
    private final double sentimentScore;

    public Comment(String name, String message, double score) {
        this.name = name;
        this.message = message;
        this.sentimentScore = score;
    }
}