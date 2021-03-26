package br.com.fiap.nac01.rm86373_rm81223_rm80203

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.Toast

class MainActivity : AppCompatActivity() {

    // variável que ira carregar nosso ImageView
    lateinit var imgProfile : ImageView
    // contImg para controlarmos qual img o app está, se inicia em 0 = imagem inicial
    var contImg : Int = 0
    // imgs = array com as imagens da nossa galeria
    val imgs = intArrayOf(
            R.drawable.p0,
            R.drawable.p1,
            R.drawable.p2,
            R.drawable.p3,
            R.drawable.p4,
            R.drawable.p5,
            R.drawable.p6
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // nossa variavel imgProfile recebe a ImageView de id imgProfile carregado do xml
        imgProfile = findViewById(R.id.imgProfile)
    }

    // func responsável por mudar a imagem do nosso app para a imagem anterior
    fun imagemAnterior(view: View) {
        // numero_img vai receber o numero atual da imagem do app (contImg) - 1, número anterior da imagem atual do app
        var numero_img = this.contImg - 1
        // variavel para armazenar o número inteiro que representa a primeira imagem do app
        var primeira_imagem = 0

        // caso a variavel numero_img seja menor que a primeira_imagem, ou seja, menor que 0, ou seja não há imagens antes dessa
        if (numero_img < primeira_imagem) {
            // informa o usuário que não há mais imagens para alterar
            Toast.makeText(this, "Não existem mais fotos na sua galeria!", Toast.LENGTH_SHORT).show()
        } else {
            // caso contrário
            // captura a proxima imagem, através do array que temos nossas imagens, de acordo com o numero_img definido
            var proxima_img = this.imgs[numero_img].toInt()
            // altera a imageResource da imagem do nosso imgProfile (ImageView)
            this.imgProfile.setImageResource(proxima_img)
            // caso a imagem seja diferente da primeira (0), mostra para o usuário uma mensagem com Imagem e seu número
            if (numero_img != primeira_imagem) Toast.makeText(this, "Imagem $numero_img", Toast.LENGTH_SHORT).show()
            // define nosso contImg com o numero_img que foi utilizado
            this.contImg = numero_img
        }
    }

    // func responsável por mudar a imagem do nosso app para a próxima imagem
    fun proximaImagem(view: View) {
        // numero_img vai receber o numero atual da imagem do app (contImg) + 1, número posterior da imagem atual do app
        var numero_img = this.contImg + 1
        // variavel para armazenar a quantidade de imagens, de acordo com o tamanho do nosso array imgs
        var qntd_de_imgs = this.imgs.size
        // variavel para armazenar o número inteiro que representa a última imagem do app
        var ultima_img = qntd_de_imgs - 1

        // caso a variavel numero_img seja igual a quantidade de imagens, ou seja, está na ultima imagem, ou seja não há imagens depois dessa
        if (numero_img == qntd_de_imgs) {
            Toast.makeText(this, "Não há mais fotos na sua galeria!", Toast.LENGTH_SHORT).show()
        } else {
            // caso contrário
            // captura a proxima imagem, através do array que temos nossas imagens, de acordo com o numero_img definido
            var proxima_img = this.imgs[numero_img].toInt()
            // altera a imageResource da imagem do nosso imgProfile (ImageView)
            this.imgProfile.setImageResource(proxima_img)
            // caso a imagem seja diferente da ultima, mostra para o usuário uma mensagem com Imagem e seu número
            if (numero_img != ultima_img) Toast.makeText(this, "Imagem $numero_img", Toast.LENGTH_SHORT).show()
            // define nosso contImg com o numero_img que foi utilizado
            this.contImg = numero_img
        }
    }
}