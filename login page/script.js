const themes =[
    {
        background:"#1A1A2E",
        color:"#FFFFFf",
        primarycolor:"#0F3460"
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primarycolor: "#E94560"
      },
      {
        background: "#192A51",
        color: "#FFFFFF",
        primarycolor: "#967AA1"
      },
      {
        background: "#F7B267",
        color: "#000000",
        primarycolor: "#F4845F"
      },
      {
        background: "#F25F5C",
        color: "#000000",
        primarycolor: "#642B36"
      },
    {
        background:"#231F20",
        color:"#FFF",
        primarycolor:"#BB4430"
    }
];
const setTheme =(theme) =>{
  const root = document.querySelector(":root");
  root.style.setProperty("--bg-color", theme.background);
  root.style.setProperty("--color", theme.color);
  root.style.setProperty("--main-color", theme.primarycolor);
  root.style.setProperty("--glass-color", theme.glasscolor);
};
const displayThemeButtons = () => {
  const btnContainer = document.querySelector(".theme-btn-container");
  themes.forEach((theme) =>{
    const div =document.createElement("div");
    div.className = "theme-btn";
    div.style.cssText = `background: ${theme.background}; width: 25px; height:25px`;
    btnContainer.appendChild(div);
    div.addEventListener("click", () => setTheme(theme));

});

};
displayThemeButtons();