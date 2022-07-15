<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Basketball</title>
        <!-- Scripts and CSS import -->
        @vite(['resources\js\three.js', 'resources\css\app.css'])
    </head>
    <body>
        <div class="bg-image"></div>
        <section id="head">
            <canvas class="webgl"></canvas>
            <div class="title">
                <h1 id="teambasket">TeamBasket</h1>
                <p id="description">Ищите людей рядом и играйте в баскетбол вместе.</p>
            </div>
        </section>
        <!-- <h1>SAMPLE text</h1> -->
        <!-- <canvas class="webgl"></canvas> -->
        <!-- <script src="js/three.js"></script> -->
        <section id="login-section">
            <div class="login-window">
                <button type="button" class="login" id="login-button">Войти</button><br>

                <button type="button" class="login" id="register-button">Зарегистрироваться</button>
            </div>
        </section>
    </body>
</html>
