export function Push() {
    const $array = [`Monday`, `Tuesday`, `Wednesday`, `Thurday`];
    $array.push(`Friday`);

    //inicio forEach
    let $arrayLine = `<ul>`;

    $array.forEach(myFunction);
    
    function myFunction(value) {
        $arrayLine += `<li>` + value + `</li>`
    }
    $arrayLine += `</ul>`;
    //fim do forEach


    return `
    <div>
        <h2>A maneira mais fácil de adicionar um novo elemento a uma matriz é usando o push()método. </h2>
        ${$arrayLine}
        <hr>
    </div>
    `
};