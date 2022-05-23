export const processData = ({ gender, minHeight }) => (data) => {
  return data
    .filter((person) => person.gender === gender && person.height > minHeight)
    .sort((a, b) => (a.mass === b.mass ? b.height - a.height : b.mass - a.mass))
    .map(({ name, mass, height }) => ({
      name: name,
      mass: mass,
      height: height
    }));
};
