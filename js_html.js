<!DocType html>
<html>
    <head>
        <title>COMBINE JS IN HTML</title>
    </head>
    <body>
        <div id="parent1">
            <p id="text1"></p>

        </div>
        <script>
            document.getElementById("text1").innerHtml="hello from js";
        </script>
    </body>
</html>