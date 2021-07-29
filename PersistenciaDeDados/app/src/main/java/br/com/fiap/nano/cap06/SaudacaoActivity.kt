package br.com.fiap.nano.cap06

import android.content.Context
import android.content.SharedPreferences
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.TextView
import java.io.FileNotFoundException
import java.io.IOException
import java.nio.charset.Charset
import java.util.*
import kotlin.toString as t

class SaudacaoActivity : AppCompatActivity() {

    private lateinit var lbSaudacaoSharedPreferences : TextView
    private lateinit var lbSaudacaoArquivo : TextView
    private lateinit var lbSaudacaoSql : TextView

    private val semTratamento = "Sem Tratamento"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_saudacao)

        this.lbSaudacaoSharedPreferences = findViewById(R.id.lbSaudacaoSharedPreferences)
        this.lbSaudacaoArquivo = findViewById(R.id.lbSaudacaoArquivo)
        this.lbSaudacaoSql = findViewById(R.id.lbSaudacaoSql)

        /* INICIO SHARED PREFERENCES */
        val saudacaoPersistencia: SharedPreferences = this.getSharedPreferences("saudacao", Context.MODE_PRIVATE)
        val nomeShared: String? = saudacaoPersistencia.getString("nome", "")
        val tratamentoShared: String? = saudacaoPersistencia.getString("tratamento", "")

        exibeSaudacao(
            nome = nomeShared.t(),
            tratamento = tratamentoShared.t(),
            label = this.lbSaudacaoSharedPreferences
        )
        /* FIM SHARED PREFERENCES */

        /* INICIO ARQUIVO */
        val filename = "saudacao"
        val data: String = recuperaDadoArquivo(filename)

        try {
            val tokenizer = StringTokenizer(data, ":")
            val nomeArquivo: String = tokenizer.nextToken()
            val tratamentoArquivo: String = tokenizer.nextToken()

            exibeSaudacao(
                nome = nomeArquivo,
                tratamento = tratamentoArquivo,
                label = this.lbSaudacaoArquivo
            )
        } catch (e: NoSuchElementException) {
            Log.i("pegaDadosSaudacaoArquivo", "NoSuchElementException")
        }
        /* FIM ARQUIVO */

        /* INICIO SQLITE */
        val db = DatabaseManager(this, "saudacoes")
        val cursor = db.listaSaudacao()

        var nomeSql: String = ""
        var tratamentoSql: String = ""

        val contadorCursor: Int = cursor.count
        if (contadorCursor > 0) {
            cursor.moveToFirst()

            nomeSql = cursor.getString(cursor.getColumnIndex("NOME"))
            tratamentoSql = cursor.getString(cursor.getColumnIndex("TRATAMENTO"))
        }

        exibeSaudacao(
            nome = nomeSql.t(),
            tratamento = tratamentoSql.t(),
            label = lbSaudacaoSql
        )
        /* FIM SQLITE */
    }

    private fun exibeSaudacao(nome: String, tratamento: String, label: TextView) {
        val nomeComSaudacao = "$tratamento $nome"

        when (tratamento) {
            semTratamento -> label.text = nome
            else -> label.text = nomeComSaudacao
        }
    }

    private fun recuperaDadoArquivo(filename: String): String {
        try {
            val fi = openFileInput(filename)
            val data = fi.readBytes()

            fi.close()
            data.toString()

            return data.toString(Charset.defaultCharset())
        } catch (e: FileNotFoundException) {
            return ""
        } catch (e: IOException) {
            return ""
        }
    }
}