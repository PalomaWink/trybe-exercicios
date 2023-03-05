const techList = (technologies, name) => {
  const techObjects = [];
  if (technologies.length === 0){
    return 'Vazio!'
  }
  technologies.sort().forEach((tech) => {
    techObjects.push({ tech, name });
  });

  return techObjects;
};

module.exports = techList