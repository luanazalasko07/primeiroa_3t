escrever = msg => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta< 0) return "Nao possui Rais.";
    if (delta == 0) return "x1 = x2 " + div(-b, mult(2,a));
    return "x1 = " + div(soma(-b, raiz(delta)),mult(2,a)) +
    " x2 = " + div(soma(-b, raiz(delta)),mult(2,a));
}

// Tentando... 3x2 - 2x -1
escrever(equacao2Grau(3, -2, -1));