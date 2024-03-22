const studentHogwarts = () => {
  let privateScore = 0;
  let name = null;

  const changeScoreBy = (points) => {
    privateScore += points;
  };

  const setName = (newName) => {
    name = newName;
  };

  const rewardStudent = () => {
    changeScoreBy(1);
  };

  const penalizeStudent = () => {
    changeScoreBy(-1);
  };

  const getScore = () => {
    return `${name}: ${privateScore}`;
  };

  return {
    setName,
    rewardStudent,
    penalizeStudent,
    getScore,
  };
};

const harry = studentHogwarts();
harry.setName("Harry");

const draco = studentHogwarts();
draco.setName("Draco");

for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}

draco.rewardStudent();
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}

console.log(harry.getScore());
console.log(draco.getScore());
