package br.com.fiap.checkpoint_02.rm_80203_rm86373_rm81223_rm82762

import android.os.Bundle
import android.view.View
import android.widget.*
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    // Declaração de variáveis da activity
    lateinit var rdgMateriais : RadioGroup
    lateinit var rdbPisoBranco : RadioButton
    lateinit var rdbPisoAlbania : RadioButton
    lateinit var rdbPorcelanato : RadioButton
    lateinit var rdbRevestimento : RadioButton
    lateinit var edtMedidaMaterial : EditText
    lateinit var chkFreteRapido : CheckBox
    lateinit var txtResultado : TextView

    // declara um array para armazenar os materiais
    lateinit var materiais : Array<RadioButton>

    // array com os valores dos materiais
    val valoresMateriais = arrayOf(
            24.90,
            11.90,
            39.90,
            16.90
    )

    // variavel abaixo contém o valor a ser acrescentado no frete
    val acrescimoFrete = 1.3
    // declara variavel com o valor da medida inicial
    val medidaInicial = 10

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // atribui para as variaveis os seus elementos da view
        rdgMateriais = findViewById(R.id.rdgMateriais)
        rdbPisoBranco = findViewById(R.id.rdbPisoBranco)
        rdbPisoAlbania = findViewById(R.id.rdbPisoAlbania)
        rdbPorcelanato = findViewById(R.id.rdbPorcelanato)
        rdbRevestimento = findViewById(R.id.rdbRevestimento)
        edtMedidaMaterial = findViewById(R.id.edtMedidaMaterial)
        chkFreteRapido = findViewById(R.id.chkFreteRapido)
        txtResultado = findViewById(R.id.txtResultado)

        // atribui os materiais ao array
        materiais = arrayOf(
                rdbPisoBranco,
                rdbPisoAlbania,
                rdbPorcelanato,
                rdbRevestimento
        )

        // insere o valor inicial da medida do material no edit text
        val textMedidaInicial = medidaInicial.toString()
        this.edtMedidaMaterial.setText(textMedidaInicial)
    }

    /*
    * Função responsável por calcular o orçamento do material de construção do usuário
    * o valor do orçamento será o valor do material escolhido * a medida em m² informada
    * */
    fun calcular(view: View) {
        // setamos a variavel que ira receber o valor do orçamento
        var valorOrcamento : Double = 0.0

        // vamos capturar o id do material selecionado pelo usuário
        val idMaterialSelecionado = rdgMateriais.checkedRadioButtonId

        // setamos a variavel que ira receber o valor do material
        var valorDoMaterial : Double = 0.0

        // vamos capturar qual foi a medida do meterial selecionado
        val medidaMaterial = edtMedidaMaterial.text.toString().toDouble()
        // caso tenha sido informado uma medida inválida
        if (medidaMaterial <= 0.0) {
            val msgRetorno = "Informe a medida do material!"
            Toast.makeText(this, msgRetorno, Toast.LENGTH_SHORT).show()
            return
        }

        // setamos uma variavel com a posicao que iremos usar para capturar o valor do meterial,
        var posValorMaterial : Int = 0

        // setamos a variavel que contém o array com os materias
        val materiais = this.materiais
        for (material in materiais) {
            if (material.id == idMaterialSelecionado) {
                valorDoMaterial = this.valoresMateriais[posValorMaterial]
                valorOrcamento = medidaMaterial * valorDoMaterial
                break
            }
            posValorMaterial++
        }

        // variavel contém se o usuário deseja frete rápido
        val desejaFreteRapido = this.chkFreteRapido.isChecked
        // caso o usuário tenha solicitado o frete rapido
        if (desejaFreteRapido) {
            // chamo a função que aplica o valor do frete no meu orçamento
            // passando o valor do orçamento e o acrescimo do frete
            val valorOrcamentoComFrete = aplicaValorFrete(valorOrcamento, this.acrescimoFrete)
            // iremos armazenar qual o valor do frete que será aplicado
            val valorDoFrete = valorOrcamentoComFrete - valorOrcamento

            // atribuimos nosso valor de orçamento para o valor de orçamento com o frete aplicado
            valorOrcamento = valorOrcamentoComFrete

            // iremos informar ao usuário qual o valor do frete a ser aplicado no orçamento
            val txtValorFrete = "Valor do frete: R$ %.2f".format(valorDoFrete)
            Toast.makeText(this, txtValorFrete, Toast.LENGTH_LONG).show()
        }

        // iremos informar ao usuário qual o valor do orçamento realizado
        val txtValorOrcamento: String = "R$ %.2f".format(valorOrcamento)
        this.txtResultado.text = txtValorOrcamento
    }

    /*
    * Função responsável por aplicar o valor do frete
    * recebe o valor a ser utilizado e o valor do frete
    * retorna o valor com o frete aplicado
    * */
    fun aplicaValorFrete(valor : Double, valorFrete : Double): Double {
        return valor * valorFrete
    }
}