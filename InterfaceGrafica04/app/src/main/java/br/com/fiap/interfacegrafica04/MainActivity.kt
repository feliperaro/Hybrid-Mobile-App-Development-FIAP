package br.com.fiap.interfacegrafica04

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.CheckBox
import android.widget.RadioButton
import android.widget.RadioGroup
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    lateinit var chkSandubaGigante : CheckBox
    lateinit var chkXBurguer : CheckBox
    lateinit var chkXSalada : CheckBox
    lateinit var chkXBacon : CheckBox
    lateinit var chkPanqueca : CheckBox
    lateinit var chkMistoQuente : CheckBox
    lateinit var chkBeirute : CheckBox
    lateinit var rdgFormaPagamento : RadioGroup

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        chkSandubaGigante = findViewById(R.id.chkSandubaGigante)
        chkXBurguer = findViewById(R.id.chkXBurguer)
        chkXSalada = findViewById(R.id.chkXSalada)
        chkXBacon = findViewById(R.id.chkXBacon)
        chkPanqueca = findViewById(R.id.chkPanqueca)
        chkMistoQuente = findViewById(R.id.chkMistoQuente)
        chkBeirute = findViewById(R.id.chkBeirute)
        rdgFormaPagamento = findViewById(R.id.rdgFormaPagamento)
    }

    fun finalizarPedido(view: View) {
        var total = 0.0

        if ( chkSandubaGigante.isChecked ) {
            total += 10
        }

        if ( chkXBurguer.isChecked ) {
            total += 11
        }

        if ( chkXSalada.isChecked ) {
            total += 12
        }

        if ( chkXBacon.isChecked ) {
            total += 13
        }

        if ( chkPanqueca.isChecked ) {
            total += 14
        }

        if ( chkMistoQuente.isChecked ) {
            total += 15
        }

        if ( chkBeirute.isChecked ) {
            total += 16
        }

        val formaPagamento = rdgFormaPagamento.checkedRadioButtonId

        if ( formaPagamento == -1 ) {
            Toast.makeText(this, "Selecione a forma de pagamento", Toast.LENGTH_SHORT).show()
            return
        }

        if (total > 0 && formaPagamento != R.id.rdbCartaoCredito) {
            total *= 0.85
        }

        val msg = String.format("Total: R$ %.2f", total)
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }

}