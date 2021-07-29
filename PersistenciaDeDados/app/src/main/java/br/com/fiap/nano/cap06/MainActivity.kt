package br.com.fiap.nano.cap06

import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.EditText
import android.widget.Spinner
import android.widget.Toast
import java.io.FileNotFoundException
import java.io.FileOutputStream
import java.io.IOException

class MainActivity : AppCompatActivity() {

    private lateinit var btnExibir : Button
    private lateinit var btnSalvarSharedPreferences : Button
    private lateinit var btnSalvarArquivo : Button
    private lateinit var btnSalvarSql : Button
    private lateinit var txtNome : EditText
    private lateinit var listTratamento : Spinner

    private val msgSalvoSucesso = "Salvo com sucesso"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        this.btnExibir = findViewById(R.id.btnExibir)
        this.btnSalvarSharedPreferences = findViewById(R.id.btnSalvarSharedPreferences)
        this.btnSalvarArquivo = findViewById(R.id.btnSalvarArquivo)
        this.btnSalvarSql = findViewById(R.id.btnSalvarSql)
        this.txtNome = findViewById(R.id.txtNome)
        this.listTratamento = findViewById(R.id.listTratamento)

        btnSalvarSharedPreferences.setOnClickListener(View.OnClickListener {
            val nome: String = txtNome.text.toString()
            val tratamento: String = listTratamento.selectedItem.toString()

            val saudacaoPersistencia: SharedPreferences = this.getSharedPreferences("saudacao", Context.MODE_PRIVATE)
            val editor: SharedPreferences.Editor = saudacaoPersistencia.edit()

            editor.putString("nome", nome)
            editor.putString("tratamento", tratamento)

            editor.apply()
            Toast.makeText(this, msgSalvoSucesso, Toast.LENGTH_SHORT).show()
        })

        btnSalvarArquivo.setOnClickListener(View.OnClickListener {
            val nome = this.txtNome.text.toString()
            val tratamento= this.listTratamento.selectedItem.toString()

            val data = "$nome:$tratamento"
            val filename = "saudacao"

            gravaDadoArquivo(filename, data)
            Toast.makeText(this, msgSalvoSucesso, Toast.LENGTH_SHORT).show()
        })

        btnSalvarSql.setOnClickListener(View.OnClickListener {
            val nome = this.txtNome.text.toString()
            val tratamento= this.listTratamento.selectedItem.toString()

            val db = DatabaseManager(this, "saudacoes")
            db.removeSaudacao(id = 1)

            db.insereSaudacao(id = 1, nome = nome, tratamento = tratamento)
            Toast.makeText(this, msgSalvoSucesso, Toast.LENGTH_SHORT).show()
        })

        btnExibir.setOnClickListener(View.OnClickListener {
            val intent = Intent(this, SaudacaoActivity::class.java)
            startActivity(intent)
        })
    }

    private fun gravaDadoArquivo(filename: String, data: String) {
        try {
            val fs: FileOutputStream = openFileOutput(filename, Context.MODE_PRIVATE)

            fs.write(data.toByteArray())
            fs.close()
        }
        catch (e: FileNotFoundException) {
            Log.i("gravaDadoArquivo", "FileNotFoundException")
        }
        catch (e: IOException) {
            Log.i("gravaDadoArquivo", "IOException")
        }
    }
}
