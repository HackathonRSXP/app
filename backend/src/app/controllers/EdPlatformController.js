const edplatforms = [
  {
    id: 1,
    name: 'Rocketseat',
    techs: ['nodejs', 'reactjs', 'reactNative'],
    url: 'urlEdPlatform',
  },
  {
    id: 2,
    name: 'DevPleno',
    techs: ['ruby', 'python'],
    url: 'urlEdPlatform',
  },
  {
    id: 3,
    name: 'Alure',
    techs: ['C', 'C++'],
    url: 'urlEdPlatform',
  },
];

const response = [
  {
    id: 1,
    name: 'Rocketseat',
    techs: ['nodejs', 'reactjs', 'reactNative'],
    url: 'urlEdPlatform',
  },
  {
    id: 2,
    name: 'DevPleno',
    techs: ['ruby', 'python'],
    url: 'urlEdPlatform',
  },
];

class EdPlatformController {
  index(req, res) {
    const { techs } = req.body;

    // const edCorrelated = [];
    // const response = edplatforms.filter(edplatform =>
    //   edplatform.techs.map(tech => !!techs.find(f => f === tech))
    // );

    return res.json({
      response,
    });
  }
}

export default new EdPlatformController();
