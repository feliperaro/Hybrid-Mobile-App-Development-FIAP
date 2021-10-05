const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

// senha aleatória gerada pelo sistema - deve ser maior e mais complexa
const JWT_SENHA = "AL77JDHASLJDHL1213ldasldka6545shdlk565643214DLKdl51iijh5"

const usuarios = [
	{
		id: 1,
		usuario: 'joao',
		senha: 'joao',
		admin: false
	},
	{
		id: 2,
		usuario: 'maria',
		senha: 'maria',
		admin: true
	}
]

const livros = []
var sequenceLivros = 1

// comentario em funcao -> /** + enter
/**
 * Verifica se usuário está autenticado com um JWT válido
 * @param {Request} req 
 * @returns {json} Payload do JWT validado
 */
const isAuthenticated = (req) => {
	try {
		const token = req.headers.authorization.replace('Bearer ', '')
		return jwt.verify(token, JWT_SENHA)
	} catch (error) {
		return null
	}
}

/**
 * Verifica se usuário autenticado é admin
 * @param {json} jwtPayload 
 * @returns {boolean}
 */
const isAdmin = (jwtPayload) => {
	return (jwtPayload && jwtPayload.admin === true)
}

/**
 * Verifica se o atributo existe e não está vazio.
 * @param {String} attr 
 * @returns {boolean}
 */
const atributoFoiInformado = (attr) => {
	return (attr && attr.trim().length > 0)
}

/**
 * Validação da entidadee livro
 * @param {json} livro // { titulo, descricao, autor, paginas, editora }
 * @returns {Array} Retorna um array com os erros, caso não tenha erro, retorna um array vazio
 */
const validarLivro = (livro) => {
	const { titulo, descricao, autor, paginas, editora } = livro

	const errors = []

	if (!atributoFoiInformado(titulo)) {
		errors.push('Título não foi informado!')
	}

	if (!atributoFoiInformado(descricao)) {
		errors.push('Descrição não foi informada!')
	}

	if (!atributoFoiInformado(autor)) {
		errors.push('Autor não foi informado!')
	}

	const reNumeros = /^[0-9]+$/
	if (!reNumeros.test(paginas)) {
		errors.push("Páginas não é um número válido!")
	}

	if (!atributoFoiInformado(editora)) {
		errors.push('Editora não foi informada!')
	}

	return errors
}

app.post('/login', (req, res) => {
	try {
		const { usuario, senha } = req.body
		const user = usuarios.find((item) => {
			return (item.usuario === usuario && item.senha === senha)
		})

		if (user) {
			// Retornar um token confirmando a autenticidade desse usuario
			const token = jwt.sign({
				usuario: usuario,
				admin: user.admin
			}, JWT_SENHA)
			res.json({ token })
		} else {
			res.sendStatus(404)
		}

	} catch (error) {
		res.sendStatus(404)
	}
})

app.get('/usuarios', (req, res) => {
	const payload = isAuthenticated(req)

	if (!payload) {
		return res.sendStatus(404)
	}

	if (!isAdmin(payload)) {
		return res.sendStatus(403)
	}

	res.json(usuarios)
})

app.get('/livros', (req, res) => {
	const payload = isAuthenticated(req)

	if (!payload) {
		return res.sendStatus(404)
	}

	res.json(livros)
})

app.post('/livros', (req, res) => {
	const payload = isAuthenticated(req)

	if (!payload) {
		return res.sendStatus(404)
	}

	if (!isAdmin(payload)) {
		return res.sendStatus(403)
	}

	const errors = validarLivro(req.body)

	if (errors.length > 0) {
		res.json(errors)
	} else {
		const { titulo, descricao, autor, paginas, editora } = req.body
		livros.push({ id: sequenceLivros++, titulo, descricao, autor, paginas, editora })
		res.sendStatus(201)
	}
})

app.delete('/livros/:id', (req, res) => {
	const payload = isAuthenticated(req)

	if (!payload) {
		return res.sendStatus(404)
	}

	if (!isAdmin(payload)) {
		return res.sendStatus(403)
	}

	const index = livros.findIndex((el) => {
		return el.id == parseInt(req.params.id)
	})

	if (index > -1) {
		livros.splice(index, 1)
		res.sendStatus(204)
	} else {
		res.sendStatus(404)
	}
})

app.listen(3000, () => {
	console.log('Aplicação executando na porta 3000');
})