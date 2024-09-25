import jwt from 'jsonwebtoken'
const KEY = '===!!Feira2024==='




export function gerarTokenAdmin(userInfo) {
  userInfo.role = 'admin';
  return jwt.sign(userInfo, KEY)
}


export function autenticacaoAdmin(req, resp, next) {
  return autenticacao(req, resp, next, 'admin');
}
