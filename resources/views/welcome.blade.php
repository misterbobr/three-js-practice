<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Basketball</title>
        <!-- Scripts and CSS import -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        @vite(['resources\js\app.js', 'resources\css\app.css'])
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
        @guest
            <section id="login-section">
                <div>
                    <button type="button" class="btn-login" id="login-button">Войти</button><br>
                    <button type="button" class="btn-login" id="register-button">Зарегистрироваться</button>
                </div>
                <div class="register-window bg-gradient">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                    @yield('register')
                </div>
                <div class="login-window bg-gradient">
                    <button type="button" class="btn-close" aria-label="Close"></button>
                    @yield('login')
                </div>
            </section>
        @endguest
    </body>
</html>
