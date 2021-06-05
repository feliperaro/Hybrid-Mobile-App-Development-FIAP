package br.com.fiap.palndromos

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    lateinit var edtFrase : EditText

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        edtFrase = findViewById(R.id.edtFrase)
    }

    /**
     * Evento disparado pelo botão verificar
     *
     * @param view
     */
    fun verificar(view: View) {
        var txt = edtFrase.text.toString().trim().toLowerCase()

        if ( txt.isEmpty() ) {
            toast(getString(R.string.informe_corretamente))
            return
        }

        txt = removeCaracteresEspeciais(txt)

        val txtInvertido = txt.reversed()

        val frase = if ( txt.equals(txtInvertido) ) {
                        getString(R.string.eh_palindromo)
                    } else {
                        getString(R.string.nao_eh_palindromo)
                    }

        toast(frase)
    }


    /**
     * Remove caracteres especiais de uma String
     *
     * @param txt
     * @return String
     */
    fun removeCaracteresEspeciais(txt : String) : String {
        var txt = txt.replace("ã", "a")
                    .replace("á", "a")
                    .replace("à", "a")
                    .replace("é", "e")
                    .replace("ê", "e")
                    .replace("í", "i")
                    .replace("ó", "o")
                    .replace("ô", "o")
                    .replace("õ", "o")
                    .replace("ú", "u")
                    .replace("ü", "u")
                    .replace("ç", "c")

        var regex = "[^a-z]".toRegex()
        return regex.replace(txt, "")
    }

    /**
     * Exibe um toast padronizado para o APP
     *
     * @param frase
     */
    fun toast(frase: String) {
        Toast.makeText(this, frase, Toast.LENGTH_SHORT).show()
    }
}