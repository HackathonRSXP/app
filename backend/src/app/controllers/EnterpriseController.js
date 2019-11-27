const enterprises = [
  {
    id: 1,
    category: 'Arquitetura',
    name: 'Neon',
    banner: 'urlDoBanner',
    subject: 'Neon.....',
    dev: 'O dev....',
    techs: ['ruby', 'reactjs', 'reactNative'],
  },
  {
    id: 2,
    category: 'Finanças',
    name: 'Nubank',
    banner: 'urlDoBanner',
    subject: 'Nubank.....',
    dev: 'O dev....',
    techs: ['nodejs', 'reactjs', 'flutter'],
  },
  {
    id: 3,
    category: 'Saúde',
    name: 'EmpresaX',
    banner: 'urlDoBanner',
    subject: 'EmpresaX.....',
    dev: 'O dev....',
    techs: ['nodejs', 'reactjs', 'flutter'],
  },
];

class EnterpriseController {
  index(req, res) {
    const { filters } = req.body;

    const response = enterprises.filter(enterprise =>
      filters.find(f => f === enterprise.category)
    );

    return res.json({
      response,
    });
  }
}

export default new EnterpriseController();
