<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>

<body>
    <main class="main-container">
        <header>
            <h1>Generate a <br><span>random password</span></h1>
            <p>Never use an insecure password again.</p>
        </header>

        <button class="generate-password-button" id="generate-passwords-button">Generate passwords</button>
        <section class="password-length-container">
            <label for="password-length-slider" class="password-length-min">Characters</label>
            <input type="range" step="1" min="8" max="16" value="8" id="password-length-slider"
                name="password-length-slider">
            <input type="number" name="number-of-characters" id="number-of-characters" value="8" step="1" min="8" max="16">
        </section>
        <section class="container">
            <input type="checkbox" name="hide-numbers-and-symbols" id="hide-numbers-and-symbols">
            <label for="hide-numbers-and-symbols">Hide numbers and symbols</label>
        </section>
        <section class="results">
            <article class="password-container">
                <p class="password-result">First Password</p>
                <button class="copy-password">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </article>
            <article class="password-container">
                <p class="password-result">Second Password</p>
                <button class="copy-password">
                    <i class="fa-regular fa-copy"></i>
                </button>
            </article>
        </section>
    </main>

    <script src="./js/index.js"></script>
</body>

</html>
