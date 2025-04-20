// RUN ONCLICK 
function colourMe() {
  if(document.querySelector("#hsbcolor")){
    const hsbcolor = document.getElementById("hsbcolor").value;
      if (!isNaN(hsbcolor)){
        const parsedNumber = parseInt(hsbcolor);
        const hsbcolorOutput = document.querySelector("#hsbcolorOutput");
        const string = "HSB SWATCH OF ";
        const textinfo = string + parsedNumber;
        hsbcolorOutput.textContent = textinfo;
        const clr = "clr";
        const clrClass = clr+parsedNumber;
        const divs = document.getElementsByClassName("userSquare");
        for (let index = 0; index < divs.length; index++) {
          const element = divs[index];
          element.classList.add(clrClass);
        }
      } else
        console.log("Please enter the integer value..");
    }
}