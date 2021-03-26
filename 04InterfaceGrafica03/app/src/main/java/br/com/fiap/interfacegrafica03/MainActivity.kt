package br.com.fiap.interfacegrafica03

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import java.lang.Exception

class MainActivity : AppCompatActivity() {

    lateinit var edtNumero01 : EditText
    lateinit var edtNumero02 : EditText
    lateinit var txtResultado : TextView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        edtNumero01 = findViewById(R.id.edtNumero01)
        edtNumero02 = findViewById(R.id.edtNumero02)
        txtResultado = findViewById(R.id.txtResultado)
    }

    /**
     * Validação dos dados necessários para este formulário
     *
     * @param numero01
     * @param numero02
     *
     * @return Boolean
     */
    fun validar(numero01:String, numero02:String) : Boolean {
        if (numero01.trim().isEmpty()) {
            Toast.makeText(this,
                "Informe corretamente o primeiro número", Toast.LENGTH_SHORT).show()
            return false;
        }

        if ( numero02.trim().isEmpty() ) {
            Toast.makeText(this,
                "Informe corretamente o segundo número", Toast.LENGTH_SHORT).show()
            return false;
        }

        return true;
    }

    /**
     * Soma os números informados
     *
     * @param view Representa o componente que disparou o evento
     */
    fun somar(view: View) {
        if ( ! validar(edtNumero01.text.toString(), edtNumero02.text.toString()) ) {
            return
        }

        try {
            val numero01 = edtNumero01.text.toString().toInt()
            val numero02 = edtNumero02.text.toString().toInt()

            val soma = numero01 + numero02

            txtResultado.text = "Soma atual: ${soma}"
        } catch ( e:Exception ) {
            Toast.makeText(this,
                "Não foi possível somar os dados informados!", Toast.LENGTH_SHORT).show()
        }
    }
}