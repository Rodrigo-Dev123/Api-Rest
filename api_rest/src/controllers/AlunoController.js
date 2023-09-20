import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const student = await Aluno.findAll();
    res.json(student);
  }

  async store(req, res) {
    try {
      const student = await Aluno.create(req.body);
      
      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      return res.json(student);
    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing id'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      return res.json(student);

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing id'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      await student.destroy();
      return res.json({
        apagado: true,
      });

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing id'],
        });
      }

      const student = await Aluno.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exist'],
        });
      }

      const updatedStudent = await student.update(req.body);
      return res.json(student);

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
  
}

export default new AlunoController();
