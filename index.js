// alert("Test");

document.addEventListener("keydown", function(e) {
    var k = e.key.toLowerCase();
    var label = document.getElementById("label");
    var btn = document.getElementById("btn");
    e.preventDefault();
    var colors = {
        "a": [
            {color: "#00FFFF", name: "Aqua"},
            {color: "#FFB6C1", name: "Apricot"},
            {color: "#7FFFD4", name: "Aquamarine"},
            {color: "#FF4500", name: "Alizarin"},
            {color: "#F0E68C", name: "Amber"}
        ],
        "b": [
            {color: "#000000", name: "Black"},
            {color: "#0000FF", name: "Blue"},
            {color: "#8A2BE2", name: "BlueViolet"},
            {color: "#A52A2A", name: "Brown"},
            {color: "#B22222", name: "BrickRed"}
        ],
        "c": [
            {color: "#DC143C", name: "Crimson"},
            {color: "#FF4500", name: "Coral"},
            {color: "#FFD700", name: "CanaryYellow"},
            {color: "#7FFF00", name: "Chartreuse"},
            {color: "#00CED1", name: "Cyan"}
        ],
        "d": [
            {color: "#6F8FAF", name: "Denim"},
            {color: "#D2691E", name: "Chocolate"},
            {color: "#FFDEAD", name: "DesertSand"},
            {color: "#B8860B", name: "DarkGoldenRod"},
            {color: "#A0522D", name: "DarkSalmon"}
        ],
        "e": [
            {color: "#50C878", name: "Emerald"},
            {color: "#E6E6FA", name: "Lavender"},
            {color: "#F5FFFA", name: "Eggshell"},
            {color: "#FFE4E1", name: "Elderberry"},
            {color: "#FFFAF0", name: "FloralWhite"}
        ],
        "f": [
            {color: "#FF00FF", name: "Fuchsia"},
            {color: "#FFD700", name: "Flame"},
            {color: "#FF6347", name: "Firebrick"},
            {color: "#FF69B4", name: "Frost"},
            {color: "#D2691E", name: "Fawn"}
        ],
        "g": [
            {color: "#008000", name: "Green"},
            {color: "#ADFF2F", name: "GreenYellow"},
            {color: "#32CD32", name: "LimeGreen"},
            {color: "#90EE90", name: "LightGreen"},
            {color: "#3CB371", name: "MediumSeaGreen"}
        ],
        "h": [
            {color: "#8E7618", name: "Hazel"},
            {color: "#FFD700", name: "Honey"},
            {color: "#F0E68C", name: "Honeydew"},
            {color: "#D2B48C", name: "Hemp"},
            {color: "#F5F5DC", name: "Haze"}
        ],
        "i": [
            {color: "#4B0082", name: "Indigo"},
            {color: "#FF4500", name: "IndianRed"},
            {color: "#F0E68C", name: "Ivory"},
            {color: "#DDA0DD", name: "Iris"},
            {color: "#B0E0E6", name: "IceBlue"}
        ],
        "j": [
            {color: "#00A86B", name: "Jade"},
            {color: "#FFD700", name: "Jasmine"},
            {color: "#FFB6C1", name: "Jellybean"},
            {color: "#FF69B4", name: "Jolly"},
            {color: "#D2691E", name: "Java"}
        ],
        "k": [
            {color: "#F0E68C", name: "Khaki"},
            {color: "#BDB76B", name: "DarkKhaki"},
            {color: "#8B4513", name: "Ketchup"},
            {color: "#D2B48C", name: "Kona"},
            {color: "#A0522D", name: "KonaBrown"}
        ],
        "l": [
            {color: "#E6E6FA", name: "Lavender"},
            {color: "#FFFACD", name: "LemonChiffon"},
            {color: "#FFDEAD", name: "Lemon"},
            {color: "#B0E0E6", name: "LightBlue"},
            {color: "#D3D3D3", name: "LightGray"}
        ],
        "m": [
            {color: "#E0B0FF", name: "Mauve"},
            {color: "#FF00FF", name: "Magenta"},
            {color: "#FF6347", name: "Mango"},
            {color: "#FF4500", name: "Melon"},
            {color: "#8B0000", name: "Maroon"}
        ],
        "n": [
            {color: "#000080", name: "Navy Blue"},
            {color: "#B22222", name: "Navajo"},
            {color: "#A52A2A", name: "Nutmeg"},
            {color: "#8B4513", name: "Nectarine"},
            {color: "#D2691E", name: "Nutmeg"}
        ],
        "o": [
            {color: "#FFA500", name: "Orange"},
            {color: "#FF4500", name: "OrangeRed"},
            {color: "#FF8C00", name: "DarkOrange"},
            {color: "#FFD700", name: "Gold"},
            {color: "#FFB6C1", name: "Orchid"}
        ],
        "p": [
            {color: "#FFC0CB", name: "Pink"},
            {color: "#DDA0DD", name: "Plum"},
            {color: "#FF69B4", name: "HotPink"},
            {color: "#DB7093", name: "PaleVioletRed"},
            {color: "#FF1493", name: "DeepPink"}
        ],
        "q": [
            {color: "#D6D6D1", name: "Quill Gray"},
            {color: "#BEBEBE", name: "Quartz"},
            {color: "#C0C0C0", name: "Silver"},
            {color: "#D3D3D3", name: "LightGray"},
            {color: "#A9A9A9", name: "DarkGray"}
        ],
        "r": [
            {color: "#FF0000", name: "Red"},
            {color: "#B22222", name: "FireBrick"},
            {color: "#CD5C5C", name: "IndianRed"},
            {color: "#FF6347", name: "Tomato"},
            {color: "#FF4500", name: "Coral"}
        ],
        "s": [
            {color: "#C0C0C0", name: "Silver"},
            {color: "#FFFAFA", name: "Snow"},
            {color: "#F5F5F5", name: "WhiteSmoke"},
            {color: "#D3D3D3", name: "LightGray"},
            {color: "#A9A9A9", name: "DarkGray"}
        ],
        "t": [
            {color: "#797982", name: "Titanium"},
            {color: "#D3D3D3", name: "Timberwolf"},
            {color: "#A52A2A", name: "Tawny"},
            {color: "#D2691E", name: "Tan"},
            {color: "#FFDEAD", name: "Tan"}
        ],
        "u": [
            {color: "#E0FF66", name: "Uranium"},
            {color: "#F0E68C", name: "Ube"},
            {color: "#E6E6FA", name: "UltraViolet"},
            {color: "#FFD700", name: "Umber"},
            {color: "#FFB6C1", name: "Unicorn"}
        ],
        "v": [
            {color: "#8F00FF", name: "Violet"},
            {color: "#EE82EE", name: "Violet"},
            {color: "#DA70D6", name: "Orchid"},
            {color: "#9400D3", name: "DarkViolet"},
            {color: "#9932CC", name: "DarkOrchid"}
        ],
        "w": [
            {color: "#F5DEB3", name: "Wheat"},
            {color: "#FFFFFF", name: "White"},
            {color: "#FFFAFA", name: "Snow"},
            {color: "#F0F8FF", name: "AliceBlue"},
            {color: "#DCDCDC", name: "Gainsboro"}
        ],
        "x": [
            {color: "#738678", name: "Xanadu"},
            {color: "#D3D3D3", name: "Xanadu"},
            {color: "#A9A9A9", name: "Xerox"},
            {color: "#C0C0C0", name: "Xenon"},
            {color: "#BEBEBE", name: "Xerox"}
        ],
        "y": [
            {color: "#FFFF00", name: "Yellow"},
            {color: "#FFD700", name: "Gold"},
            {color: "#FFFFE0", name: "LightYellow"},
            {color: "#FFFACD", name: "LemonChiffon"},
            {color: "#FFFFF0", name: "FloralWhite"}
        ],
        "z": [
            {color: "#E1DBD0", name: "Zinc White"},
            {color: "#F5F5F5", name: "Zinnia"},
            {color: "#D3D3D3", name: "Zebra"},
            {color: "#C0C0C0", name: "Zircon"},
            {color: "#BEBEBE", name: "Zaffre"}
        ]
    };
    
 
    // Check if the key pressed is in the colors object
    if (colors[k]) {
        var i = Math.floor(Math.random() * colors[k].length);
        document.body.style.background = colors[k][i].color;
        label.textContent = " • " + colors[k][i].name + " " + colors[k][i].color +" • "; // Show the color name
        label.classList.add("show");
        btn.classList.add("show");
    } 
});

document.addEventListener("keyup", function(e){
    var label = document.getElementById("label");
    // this.body.style.background = "white";
    // label.textContent = " • Press any letter to see the magic of color! • "
    // label.classList.add("hide");
    // label.classList.remove("show");
});

// var colors = {
//     "a" : [
//         {color: "#00FFFF", name: "Aqua"},
//         {color: "#FBCEB1", name: "Apricot"},
//         {color: "#7FFFD4", name: "Aquamrine"}
//     ],
//     "b" : [
//         {color: "#000000", name: "Black" }
//     ],
//     "c": [
//         {color: "#DC143C", name: "Crimson" }
//     ],
//     "d": [
//         {color: "#6F8FAF", name: "Denim"}
//     ],
//     "e": [
//         {color: "#50C878", name: "Emerald"}
//     ],
//     "f": [
//         {color: "#FF00FF", name: "Fuchsia"}
//     ],
//     "g": [
//         {color: "#008000", name: "Green"}
//     ],
//     "h": [
//         {color: "#8E7618", name: "Hazel"}
//     ],
//     "i": [
//         {color: "#4B0082", name: "Indigo"}
//     ],
//     "j": [
//         {color: "#00A86B", name: "Jade"}
//     ],
//     "k": [
//         {color: "#F0E68C", name: "Khaki"}
//     ],
//     "l": [
//         {color: "#E6E6FA", name: "Lavendar"}
//     ],
//     "m": [
//         {color: "#E0B0FF", name: "Mauve"}
//     ],
//     "n": [
//         {color: "#000080", name: "Navy Blue"}
//     ],
//     "o": [
//         {color: "#FFA500", name: "Orange"}
//     ],
//     "p": [
//         {color: "#FFC0CB", name: "Pink"}
//     ],
//     "q": [
//         {color: "#D6D6D1", name: "Quill Gray"}
//     ],
//     "r": [
//         {color: "#FF0000", name: "Red"}
//     ],
//     "s": [
//         {color: "#C0C0C0", name: "Silver"}
//     ],
//     "t": [
//         {color: "#797982", name: "Titanium"}
//     ],
//     "u": 
//     [{color: "#E0FF66", name: "Uranium"}
//     ],
//     "v": [
//         {color: "#8F00FF", name: "Voilet"}
//     ],
//     "w": [
//         {color: "#F5DEB3", name: "Wheat"}
//     ],
//     "x": [
//         {color: "#738678", name: "Xanadu"}
//     ],
//     "y": [
//         {color: "#FFFF00", name: "Yellow"}
//     ],
//     "z": [
//         {color: "#E1DBD0", name: "Zinc White"}
//     ]
// };
