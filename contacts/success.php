<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сообщение отправлено</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #A8B5DE;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            text-align: center;
            background-color: #d3ddfc;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(46, 12, 121, 0.8);
            background-color: #d3ddfc;
        }

        h1 {
            color: #2e0c79;
        }

        p {
            font-size: 18px;
            color: #2e0c79;
        }

        .button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #2e0c79;
             color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
        }

        .button:hover {
            background-color: #af1a1a;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Спасибо за ваш отзыв!</h1>
        <p>Ваши отзывы помогают мне быть лучше</p>
        <button class="button" onclick="window.location.href='potrfolio.html'">Вернуться на главную</button>
    </div>
</body>

</html>