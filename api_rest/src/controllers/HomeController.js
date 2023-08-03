import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Mariana',
      sobrenome: 'Vasconceles',
      email: 'mariana@gmail.com',
      idade: 21,
      peso: 76,
      altura: 1.65,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
