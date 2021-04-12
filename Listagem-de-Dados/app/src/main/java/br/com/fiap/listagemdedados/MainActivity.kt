package br.com.fiap.listagemdedados

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    val paises = arrayOf(
        "Angola",
        "Afeganistão",
        "Alemanha",
        "Argentina",
        "Brasil",
        "Búlgaria",
        "Bélgica",
        "Canadá",
        "Croácia",
        "Colômbia",
        "Chile",
        "Camarões",
        "Dinamarca",
        "Djibouti",
        "Dominica",
        "Espanha",
        "Estônia",
        "Equador",
        "Estados Unidos",
        "Escócia",
        "Finlândia",
        "França",
        "Filipinas"
    )

    lateinit var lstPaises : ListView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        lstPaises = findViewById(R.id.lstPaises)
        val adapter = ArrayAdapter(
                this,
                android.R.layout.simple_list_item_1,
                paises
        )

        lstPaises.adapter = adapter
        lstPaises.setOnItemClickListener { parent, view, position, id ->
//            Toast.makeText(this, paises[position], Toast.LENGTH_SHORT).show())
            val it = Intent(this, PaisActivity::class.java)
            it.putExtra("nome", paises[position])
            it.putExtra("posicao", position)

            startActivity(it)
        }
    }
}