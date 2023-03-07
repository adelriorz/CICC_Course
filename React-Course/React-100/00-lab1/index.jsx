<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://unpkg.com/materialize-css@1.0.0/dist/css/materialize.min.css"/>
    <!-- REACT API -->
    <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <!-- REACT DOM -->
    <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <!-- BABEL COMPILER -->
    <script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
<script type="text/babel">
    const name ="Rottweiler"
    const imageURL = "https://images.dog.ceo/breeds/rottweiler/n02106550_11693.jpg"
    const cardImage = React.createElement("div", {className: "card-image"}, 
                            React.createElement("img", {src: imageURL, alt: ""}));
    const cardContent = React.createElement("div", {className: "card-content"}, 
                            React.createElement("p", null, name));
    const card = React.createElement("div", {className: "card medium"}, 
                    cardImage, cardContent);
    const row = React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col"}, 
                        card));
    ReactDOM.render(row, document.getElementById('root'))
</script>
</body>
</html> 
