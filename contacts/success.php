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
            font-family: 'Inter', Arial, sans-serif;
            color: #2e0c79;
        }

        p {
            font-family: 'Inter', Arial, sans-serif;
            font-size: 18px;
            color: #2e0c79;
        }

        .button {
            font-family:Arial, sans-serif;
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
        <h1>Заявка отправлена!</h1>
        <p>Отвечу вам в ближайшее время.<br>Обычно, это не занимает больше часа.</p>
        <button class="button" onclick="window.location.href='contacts.html'">Вернуться назад</button>
    </div>
</body>

</html>