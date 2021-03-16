package com.fiap.transicaojavaparakotlin;

public class Pessoa {

    private String nome;
    private String email;

    public Pessoa(String nome, String email) {
        this.nome = nome;
        this.email = email;

        Person person = new Person("Felipe", "feliperamosroque@gmail.com");
        person.getEmail();
        person.getName();
        person.setEmail("felipe.roque@bpatechnologies.com");
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
