export const avargeGrade = (projectsList: any) => {
    const grades = projectsList.map((project: any) => project.score);
  return ([...grades].reduce((a, b) => a + b,0) / grades.length);
};

export const passPercent = (projectsList: any) => {
  return (
    (projectsList.filter((project: any) => project.madeDadeline == true)
      .length /
      projectsList.length) *
    100
  ).toFixed(2);
};
