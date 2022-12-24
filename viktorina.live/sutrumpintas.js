        //original 
function generateAndDisplayRandomPoint() {
    // Generate a random point from 1 to 5
    const randomPoint = Math.floor(Math.random() * 5) + 1;
    let litoVerte = "";
    let imageSrc = "";
  
    // Determine the value of litoVerte and imageSrc based on the value of randomPoint
    if (randomPoint === 1) {
      litoVerte = "Litas";
    
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/1Lt.png";
      image1Element.alt = "Klausimo verte vienas Litas";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
      
    } 
    else if (randomPoint === 2) {
      litoVerte = "Litai";
  
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/1Lt.png";
      image1Element.alt = "1 Lt";
      image1Element.classList.add("on-off-litai1"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
  
      const image2Element = document.createElement("img");
      image2Element.src = "/viktorina.live/images/ImgLitai/1Lt.png";
      image2Element.alt = "1 Lt";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image2Element);
    }
    else if (randomPoint === 3) {
      litoVerte = "Litai";
  
      // Display multiple images
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/1Lt.png";
      image1Element.alt = "1 Lt";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
  
      const image2Element = document.createElement("img");
      image2Element.src = "/viktorina.live/images/ImgLitai/2Lt.png";
      image2Element.alt = "1 Lt";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image2Element);
    }
    else if (randomPoint === 4) {
      litoVerte = "Litai";
  
      // Display multiple images
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/2Lt.png";
      image1Element.alt = "1 Lt";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
  
      const image2Element = document.createElement("img");
      image2Element.src = "/viktorina.live/images/ImgLitai/2Lt.png";
      image2Element.alt = "1 Lt";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image2Element);
    }
    else if (randomPoint === 5) {
      litoVerte = "Litai";
    
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/5Lt.png";
      image1Element.alt = "1 Lt";
      image1Element.classList.add("new-class1"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
    } 
    else {
      litoVerte = "Litai";
      imageSrc = "/ImgLitai/2Lt.png";
    }
  
    // Display the random point in the "points" element
    document.getElementById("points").innerHTML = `Verte: ${randomPoint} ${litoVerte}`;
  
    // Display the image in the "image" element
    const imageElement = document.getElementById("litai-img");
    imageElement.src = imageSrc;
    imageElement.alt = `${randomPoint} ${litoVerte}`;
    
  }


  // sutrumpinta
  function generateAndDisplayRandomPoint() {
    // Generate a random point from 1 to 5
    const randomPoint = Math.floor(Math.random() * 5) + 1;
    let litoVerte = "";
    let imageSrc = "";
  
    // Determine the value of litoVerte and imageSrc based on the value of randomPoint
    if (randomPoint === 1) {
      litoVerte = "Litas";
    
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/1Lt.png";
      image1Element.alt = "Klausimo verte vienas Litas";
      image1Element.classList.add("on-off-litai"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
      
    } 
    else if (randomPoint === 5) {
      litoVerte = "Litai";
    
      const image1Element = document.createElement("img");
      image1Element.src = "/viktorina.live/images/ImgLitai/5Lt.png";
      image1Element.alt = "1 Lt";
      image1Element.classList.add("new-class1"); // Add the new class here
      document.getElementById("litai-img").appendChild(image1Element);
    } 
    else {
      litoVerte = "Litai";
      imageSrc = "/ImgLitai/2Lt.png";
    }
  
    // Display the random point in the "points" element
    document.getElementById("points").innerHTML = `Verte: ${randomPoint} ${litoVerte}`;
  
    // Display the image in the "image" element
    const imageElement = document.getElementById("litai-img");
    imageElement.src = imageSrc;
    imageElement.alt = `${randomPoint} ${litoVerte}`;
    
  }




  function generateBonusPoints() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const randomHour = Math.floor(Math.random() * 24);
    if (currentHour === randomHour) {
      const points = [];
      for (let i = 0; i < 30; i++) {
        const randomNumber = Math.floor(Math.random() * 5);
        if (randomNumber === 0) {
          points.push(10);
        } else if (randomNumber === 1) {
          points.push(20);
        } else if (randomNumber === 2) {
          points.push(30);
        } else if (randomNumber === 3) {
          points.push(40);
        } else if (randomNumber === 4) {
          points.push(50);
        }
      }
      return points;
    } else {
      return [];
    }
  }
  const bonus = generateBonusPoints();
  