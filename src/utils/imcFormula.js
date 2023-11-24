export const imcCalcule = (weight, height) => {
  const imc = weight / (height ^ 2);
  return imc;
};
