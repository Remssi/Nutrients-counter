const onToggleInputType = () => {
  const toggleCheckbox = document.getElementById("input-type");
  if (toggleCheckbox.checked === false) {
    document.querySelector(".input-tip-text").classList.remove("display-none");
  } else {
    document.querySelector(".input-tip-text").classList.add("display-none");
  }
};

export default onToggleInputType;
