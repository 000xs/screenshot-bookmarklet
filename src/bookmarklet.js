javascript: (function () {
  // Function to capture the full-page screenshot
  function captureScreenshot() {
    // Check if html2canvas is loaded
    if (typeof html2canvas === "undefined") {
      alert("html2canvas library is required to capture the screenshot.");
      return;
    }

    // Use html2canvas to take a screenshot of the whole page
    html2canvas(document.body, {
      onrendered: function (canvas) {
        // first screen
        let box = document.createElement("div");
        box.style.position = "fixed";
        box.style.top = 0;
        box.style.left = 0;
        box.style.margin = '12px';
        box.style.display = "flex";
        box.style.flexDirection = "column";
        box.style.alignItems = "center";
        box.style.justifyContent = "center";
        box.style.border = "1px solid #000"
        box.style.borderRadius = "8px";
        box.style.padding = "20px";
        box.style.background = "#fff "
  
        // hder text first screen 
        let heder = document.createElement("h1");
        heder.textContent = "Capture Screenshot";
        heder.style.textAlign = "center";
        heder.style.fontFamily = "Arial, sans-serif";
        heder.style.fontSize = "16px";
        heder.style.fontWeight = "bold";
        heder.style.color = "#000";
        box.appendChild(heder);

        // button layouts 

        let buttonsList = document.createElement("div");
        buttonsList.style.display = "flex";
        buttonsList.style.gap = "10px";
        buttonsList.style.flexDirection = "row";

        // captureButton in first scren 

        let captureButton = document.createElement("button");
        captureButton.textContent = "📸";
        captureButton.style.padding = "10px 20px";
        captureButton.style.border = '1px solid #000';
        captureButton.style.borderRadius = "8px";
        captureButton.style.fontSize = "16px";
        
        buttonsList.appendChild(captureButton);

        // close buttune in firs screen 
        let clButton = document.createElement("button");
        clButton.textContent = "❌";
        clButton.style.padding = "10px 20px";
        clButton.style.border = '1px solid #000';
        clButton.style.borderRadius = "8px";
        clButton.style.fontSize = "16px";
        
        buttonsList.appendChild(clButton);

        box.appendChild(buttonsList);

        document.body.appendChild(box);

        clButton.addEventListener("click", function () {

            document.body.removeChild(box);
         
        });

        // captureButton Function 

        captureButton.addEventListener("click", function () {
          document.body.removeChild(box);
          overlay(); 
        });

        // Show Overlay when click captureButton 
        const overlay = () => {
          let overlay = document.createElement("div");
          overlay.style.position = "fixed";
          overlay.style.top = 0;
          overlay.style.left = 0;
          overlay.style.width = "100vw";
          overlay.style.height = "100vh";
          overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          overlay.style.zIndex = 9999;
          overlay.style.cursor = "pointer";
          overlay.style.display = "fixed";

          overlay.style.position = "fixed";
          document.body.appendChild(overlay);

          let downloadButton = document.createElement("button");
          downloadButton.textContent = "Download Screenshot";
          downloadButton.style.position = "fixed";
          downloadButton.style.top = "10px";
          downloadButton.style.left = "10px";
          downloadButton.style.padding = "10px 20px";
          downloadButton.style.backgroundColor = "blue";
          downloadButton.style.color = "white";
          downloadButton.style.border = "none";
          downloadButton.style.cursor = "pointer";
          downloadButton.style.zIndex = 10000;
          document.body.appendChild(downloadButton);

            //downlode button logic
          downloadButton.addEventListener("click", function () {
            let link = document.createElement("a");
            link.href = canvas.toDataURL();  
            link.download = "screenshot.png";  
            link.click(); 
          });

          // Create a close button
          let closeButton = document.createElement("button");
          closeButton.textContent = "Close";
          closeButton.style.position = "fixed";
          closeButton.style.top = "10px";
          closeButton.style.right = "10px";
          closeButton.style.padding = "10px 20px";
          closeButton.style.backgroundColor = "red";
          closeButton.style.color = "white";
          closeButton.style.border = "none";
          closeButton.style.cursor = "pointer";
          closeButton.style.zIndex = 10000;
          document.body.appendChild(closeButton);

          // Button click event to close the overlay and image
          closeButton.addEventListener("click", function () {
            document.body.removeChild(overlay);
            document.body.removeChild(img);
            document.body.removeChild(downloadButton);
            document.body.removeChild(closeButton);
          });

          // Add an image of the screenshot
          let img = new Image();
          img.src = canvas.toDataURL();
          img.style.position = "absolute";
          img.style.top = "50%";
          img.style.left = "50%";
          img.style.transform = "translate(-50%, -50%)";
          img.style.maxWidth = "90%";
          img.style.maxHeight = "90%";
          img.style.cursor = "move";
          img.style.position = "fixed";
          img.style.border = "10px solid white";
          document.body.appendChild(img);
        };
      
        img.addEventListener("click", function () {
        
          let link = document.createElement("a");
          link.href = canvas.toDataURL(); 
          link.download = "screenshot.png";  
          link.click();  
        });
      },
    });
  }

  // Load the html2canvas library dynamically if not already included
  if (typeof html2canvas === "undefined") {
    let script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js";
    script.onload = captureScreenshot; // Call the function once the library is loaded
    document.head.appendChild(script);
  } else {
    captureScreenshot(); // If already loaded, call directly
  }
})();
