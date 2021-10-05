const axios = require('axios')

const URL_SERVIDOR = 'http://10.0.2.2:3000'

export const login = (usuario, senha) => {
  return axios({
    method: 'post',
    url: `${URL_SERVIDOR}/login`,
    data: { usuario, senha }
  })
}