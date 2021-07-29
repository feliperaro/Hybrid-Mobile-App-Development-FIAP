package br.com.fiap.nano.cap06

import android.content.ContentValues
import android.content.Context
import android.database.Cursor
import android.database.sqlite.SQLiteDatabase
import android.database.sqlite.SQLiteOpenHelper

class DatabaseManager(context: Context, name: String) : SQLiteOpenHelper(context, name, null, 1) {

    override fun onCreate(db: SQLiteDatabase?) {
        db?.execSQL("CREATE TABLE SAUDACAO(" +
                " ID_SAUDACAO INT NOT NULL," +
                " NOME VARCHAR(20)," +
                " TRATAMENTO VARCHAR(20)," +
                " PRIMARY KEY (ID_SAUDACAO)" +
                ");"
        )
    }

    override fun onUpgrade(db: SQLiteDatabase?, oldVersion: Int, newVersion: Int) {
        db?.execSQL("DROP TABLE IF EXISTS SAUDACAO")

        db?.execSQL("CREATE TABLE SAUDACAO(" +
                "	ID_SAUDACAO INT NOT NULL," +
                "	NOME VARCHAR(20)," +
                "	TRATAMENTO VARCHAR(20)," +
                "	PRIMARY KEY (ID_SAUDACAO)" +
                "	);")
    }

    fun insereSaudacao(id: Int, nome: String, tratamento: String) {
        val db: SQLiteDatabase = this.writableDatabase
        val cv = ContentValues()

        cv.put("ID_SAUDACAO", id)
        cv.put("NOME", nome)
        cv.put("TRATAMENTO", tratamento)

        db.insert("SAUDACAO", "ID_SAUDACAO", cv)
    }

    fun listaSaudacao() : Cursor {
        val db : SQLiteDatabase = this.readableDatabase

        return db.rawQuery("select nome, tratamento from saudacao", null)
    }

    fun removeSaudacao(id: Int) {
        val db = this.writableDatabase
        db.delete("SAUDACAO", "ID_SAUDACAO=$id", null)
    }
}

