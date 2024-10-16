// alert("Test");

document.addEventListener("keydown", function(e) {
    var k = e.key.toLowerCase();
    var label = document.getElementById("label");
    e.preventDefault();    
    // Define colors based on the key pressed
    var colors = {
        "a": { color: "#00FFFF", name: "Aqua" },
        "b": { color: "#000000", name: "Black" },
        "c": { color: "#DC143C", name: "Crimson" },
        "d": { color: "#6F8FAF", name: "Denim" },
        "e": { color: "#50C878", name: "Emerald" },
        "f": { color: "#FF00FF", name: "Fuchsia" },
        "g": { color: "#008000", name: "Green" },
        "h": { color: "#8E7618", name: "Hazel" },
        "i": { color: "#4B0082", name: "Indigo" },
        "j": { color: "#00A86B", name: "Jade" },
        "k": { color: "#F0E68C", name: "Khaki" },
        "l": { color: "#E6E6FA", name: "Lavendar" },
        "m": { color: "#E0B0FF", name: "Mauve" },
        "n": { color: "#000080", name: "Navy Blue" },
        "o": { color: "#FFA500", name: "Orange" },
        "p": { color: "#FFC0CB", name: "Pink" },
        "q": { color: "#D6D6D1", name: "Quill Gray" },
        "r": { color: "#FF0000", name: "Red" },
        "s": { color: "#C0C0C0", name: "Silver" },
        "t": { color: "#797982", name: "Titanium" },
        "u": { color: "#E0FF66", name: "Uranium" },
        "v": { color: "#8F00FF", name: "Voilet" },
        "w": { color: "#F5DEB3", name: "Wheat" },
        "x": { color: "#738678", name: "Xanadu" },
        "y": { color: "#FFFF00", name: "Yellow" },
        "z": { color: "#E1DBD0", name: "Zinc White" }
    };

    // Check if the key pressed is in the colors object
    if (colors[k]) {
        document.body.style.background = colors[k].color;
        label.textContent = " • " + colors[k].name + " " + colors[k].color +" • "; // Show the color name
        label.classList.add("show");
    }
});

document.addEventListener("keyup", function(e){
    var label = document.getElementById("label");
    this.body.style.background = "white";
    label.textContent = " • Press any letter to see the magic of color! • "
    // label.classList.add("hide");
    // label.classList.remove("show");
});