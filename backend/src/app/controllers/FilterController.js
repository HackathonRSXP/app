class FilterController {
  index(req, res) {
    return res.json([
      {
        id: 1,
        category: 'Finanças',
      },
      {
        id: 2,
        category: 'Jurídica',
      },
      {
        id: 3,
        category: 'Educação',
      },
      {
        id: 4,
        category: 'Saúde',
      },
      {
        id: 5,
        category: 'T.I',
      },
      {
        id: 4,
        category: 'Arquitetura',
      },
    ]);
  }
}

export default new FilterController();
