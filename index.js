const paragraph = document.getElementById("paragraphClass");
const myButton = document.getElementById("btn");
const textArea = document.getElementById("textHere");


myButton.addEventListener("click", ()=>{

    paragraph.style.color = "red";
    paragraph.textContent = "The tiny Pomeranian, long a favorite of royals and commoners alike, has been called the ideal companion. The glorious coat, smiling, foxy face, and vivacious personality have helped make the Pom one of the world's most popular toy breeds The Pomeranian combines a tiny body (no more than seven pounds) and a commanding big-dog demeanor. The abundant double coat, with its frill extending over the chest and shoulders, comes in almost two dozen colors, and various patterns and markings, but is most commonly seen in orange or red. Alert and intelligent, Pomeranians are easily trained and make fine watchdogs and perky pets for families with children old enough to know the difference between a toy dog and a toy. Poms are active but can be exercised with indoor play and short walks, so they are content in both the city and suburbs. They will master tricks and games with ease, though their favorite activity is providing laughs and companionship to their special human.";
});



textArea.addEventListener("keyup", ()=>{
    const originalParagraph = paragraph.textContent;
    const newText = "\n" + textArea.value.trim();
    const updatedParagraph = originalParagraph + newText;
    paragraph.textContent = updatedParagraph;
    textArea.value = "";
});