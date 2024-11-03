import jwt from 'jsonwebtoken';

const KEY = process.env.JWT_SECRET_KEY || 'fallbackKey';

export function gerarTokenAdmin(userInfo) {
  userInfo.role = 'admin';
  return jwt.sign(userInfo, KEY, { expiresIn: '1h' }); 
}

export function autenticacaoAdmin(req, resp, next) {
  return autenticacao(req, resp, next, 'admin');
}

export function autenticacao(req, resp, next, role) {
  try {
    let token = req.headers['x-access-token'] || req.query['x-access-token'];

    if (!token) {
      return resp.status(401).json({ error: 'Token não fornecido' });
    }

    const signd = jwt.verify(token, KEY);

    req.user = signd; 
    if (role && signd.role !== role) {
      return resp.status(403).json({ error: 'Acesso negado' }); 
    }

    next();
  } catch (e) {
    console.error(e); 
    return resp.status(401).json({ error: 'Token inválido ou expirado' });
  }
}

export function getUserInfo(req) {
  try {
    let token = req.headers['x-access-token'] || req.query['x-access-token'];

    if (!token) {
      return null; 
    }

    return jwt.verify(token, KEY);
  } catch {
    return null;
  }
}
