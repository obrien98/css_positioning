/* This web app is meant to teach css positioning. The html is composed of four
buttons(that are desinged to look like tabs) with class "tab-link" and four divs
with class "tab-content." Upon clicking one of the buttons the displayInfo()
function is triggered. This function "hides" (gets all elements with class name
"tab-content" and sets display:none;) any elements that were previously showing(
due to display:block or display: flex, etc), "shows" the content that should be
dipslayed when said button is clicked (set display:flex;
div with id passed as argument). Then applies the appropriate classes.
*/



/*Begin main program*/
hideContent(); //Hide all content intially
showContent('1'); //Show div with id=1 intially (static positioning)

document.getElementById("button1").addEventListener("click", function(){displayInfo(event, "1");});
document.getElementById("button2").addEventListener("click", function(){displayInfo(event, "2");});
document.getElementById("button3").addEventListener("click", function(){displayInfo(event, "3");});
document.getElementById("button4").addEventListener("click", function(){displayInfo(event, "4");});
/* End main program*/


function displayInfo(evt, idOfContent)
{
  hideContent(); //hide the previously displayed ".tab-content"
  showContent(idOfContent); //display show "tab-content" according to button id
  applyPositioning(idOfContent); //apply positioning class(es)
}
function showContent(id)
{
  let tabContent = document.getElementById(id);//get element by id
  tabContent.style.display = "flex"; //set display to flex
}

function hideContent()
{
  let tabContent = document.getElementsByClassName("tab-content");
  for(let i = 0; i < tabContent.length; i++)
  {
    tabContent[i].style.display = "none"; //set all elements with class "tab-content" to display:none
  }
}

function applyPositioning(id)
{
  //apply certain class depending on id of what element?
  let nameOfClass = "";
  if(id === "2")
  {
    nameOfClass="relative";
    let tabContent = document.getElementById(id);
    tabContent.classList.add(nameOfClass);
  }
  else if(id === "3")
  {
    nameOfClass="absolute";
    let tabContent = document.getElementById(id);
    tabContent.classList.add(nameOfClass);
  }
  else if(id === "4")
  {
    nameOfClass="relative2";
    let tabContent = document.getElementById(id);
    tabContent.classList.add(nameOfClass);


  }
}
