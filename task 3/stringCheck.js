export function checkForJavaScript(str) {
    // Создаем регулярное выражение для поиска слова "javascript" (регистр игнорируется)
    const regex = /javascript/i;
    // Проверяем строку на соответствие регулярному выражению и возвращаем результат
    return regex.test(str);
}
