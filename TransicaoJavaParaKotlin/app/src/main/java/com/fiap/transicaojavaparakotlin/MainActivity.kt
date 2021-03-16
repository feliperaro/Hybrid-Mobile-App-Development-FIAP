package com.fiap.transicaojavaparakotlin

import android.support.v7.app.AppCompatActivity
import android.os.Bundle

// --> : <-- its like extends
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // call function
        this.sum(10, 20)

        val pessoa = Pessoa("Stephany", "stephanysomaiseu@gmail.com")
        val nome = pessoa.nome
    }

    // fun is function
    fun sum(a: Int, b:Int) : Int {
        return a + b
    }
}

// if you want a empty class, just put the word 'class' before the class name
//class Person
class Person (val name:String, var email:String)