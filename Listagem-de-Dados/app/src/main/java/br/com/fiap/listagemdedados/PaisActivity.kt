package br.com.fiap.listagemdedados

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class PaisActivity : AppCompatActivity() {

    lateinit var txtInfoPais : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_pais)

        txtInfoPais = findViewById(R.id.txtInfoPais)

        val extras = this.intent.extras
        if (extras != null) {
            val nome = extras.getString("nome", "")
            val posicao = extras.getInt("posicao", -1)

            this.title = nome

            txtInfoPais.text = "${nome} - Posição: ${posicao + 1}"

        }
    }
}