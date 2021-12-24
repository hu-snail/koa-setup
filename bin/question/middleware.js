export default () => {
  return {
    type: "checkbox",
    name: "middleware",
    choices: [
      {
        name: "koaRouter",
      },
      {
        name: "koaStatic",
      },
    ],
  };
};
