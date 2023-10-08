const setIdInLS = id => {
  localStorage.setItem("viewDetailsClickId", JSON.stringify(id));
};

const getIdInLS = () => {
  const clickedId = localStorage.getItem("viewDetailsClickId") / 1;
  return clickedId;
};

export { setIdInLS, getIdInLS };
