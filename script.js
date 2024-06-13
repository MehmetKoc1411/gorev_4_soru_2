function checkNumbers() 
{
    var userNumbers = [];
    var uniqueNumbers = new Set();

    for (var i = 1; i <= 6; i++) 
    {
        var number = parseInt(document.getElementById('number' + i).value);
        if (isNaN(number) || number < 1 || number > 49) 
        {
            alert('Lütfen 1 ile 49 arasında bir sayı giriniz.');
            return;
        }
        if (uniqueNumbers.has(number)) 
        {
            alert('Lütfen farklı sayılar giriniz.');
            return;
        }
        userNumbers.push(number);
        uniqueNumbers.add(number);
    }

    var lottoNumbers = [];
    while (lottoNumbers.length < 6) 
    {
        var random = Math.floor(Math.random() * 49) + 1;
        if (!lottoNumbers.includes(random)) 
        {
            lottoNumbers.push(random);
        }
    }

    var correctNumbers = userNumbers.filter(n => lottoNumbers.includes(n));
    var resultDiv = document.getElementById('result');
    if (correctNumbers.length < 3) 
    {
        resultDiv.textContent = 'Kazanamadınız.';
    } else 
    {
        resultDiv.textContent = `Tebrikler, ${correctNumbers.length} adet sayı bildiniz.`;
    }

    var numbersDiv = document.createElement('div');
    numbersDiv.textContent = `Loto Sayıları: ${lottoNumbers.join(', ')}, Tahminleriniz: ${userNumbers.join(', ')}`;
    resultDiv.appendChild(numbersDiv);
}
