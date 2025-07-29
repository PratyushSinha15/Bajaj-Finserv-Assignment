exports.process = (data) => {
    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let alpha_string = "";

    data.forEach(item => {
        if (!isNaN(parseFloat(item)) && isFinite(item)) {
            const number = parseInt(item, 10);
            sum += number;
            if (number % 2 === 0) {
                even_numbers.push(String(number));
            } else {
                odd_numbers.push(String(number));
            }
        } else if (typeof item === 'string' && /^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item.toUpperCase());
            alpha_string += item;
        } else {
            special_characters.push(item);
        }
    });

   
    let concat_string = "";
    const reversed_alpha_string = alpha_string.split('').reverse().join('');

    for (let i = 0; i < reversed_alpha_string.length; i++) {

        if (i % 2 === 0) {
            concat_string += reversed_alpha_string[i].toUpperCase();
        } else {
            concat_string += reversed_alpha_string[i].toLowerCase();
        }
    }

    return {
        odd_numbers,
        even_numbers,
        alphabets,
        special_characters,
        sum: String(sum),
        concat_string
    };
};