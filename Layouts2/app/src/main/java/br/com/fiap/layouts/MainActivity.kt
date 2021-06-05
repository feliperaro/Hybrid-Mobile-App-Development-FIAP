package br.com.fiap.layouts

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }

    fun abrirActivity(view: View) {
        val activity = when ( view.id ) {
            R.id.btnRelative -> RelativeActivity::class.java
            R.id.btnAbsolute -> AbsoluteActivity::class.java
            else -> FrameActivity::class.java
        }

        val it = Intent(this, activity)
        startActivity(it)
    }
}