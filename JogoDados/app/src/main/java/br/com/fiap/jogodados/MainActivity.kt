package br.com.fiap.jogodados

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.ImageView
import android.widget.Toast
import kotlin.random.Random

class MainActivity : AppCompatActivity() {

    lateinit var imgJogador01 : ImageView
    lateinit var imgJogador02 : ImageView

    val imgs = intArrayOf(
            R.drawable.dado01,
            R.drawable.dado02,
            R.drawable.dado03,
            R.drawable.dado04,
            R.drawable.dado05,
            R.drawable.dado06
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        imgJogador01 = findViewById(R.id.imgJogador01)
        imgJogador02 = findViewById(R.id.imgJogador02)
    }

    fun jogar(view: View) {
        val x = Random.nextInt(imgs.size)
        val y = Random.nextInt(imgs.size)

        imgJogador01.setImageResource(imgs[x])
        imgJogador02.setImageResource(imgs[y])

        var msg = "Deu empate!"

        if (x > y) {
            msg = "Jogador 01 venceu!"
        } else if (y > x) {
            msg = "Jogador 02 venceu!"
        }

        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()
    }
}