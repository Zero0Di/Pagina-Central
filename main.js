function AltereOpcoes()
{
  let select = document.querySelector("#mudarOpcoes");
  const opt = document.querySelector("#opn");
  var verao = document.getElementById("#versao");

  let optionValue = select.options[select.selectedIndex];
  
  let value=optionValue.value;
  let text=optionValue.text;
  opt.href = value;
  verao.textContent = text;
}
function AltereAndroid()
{
  let select = document.querySelector("#mudarOpcoes");
  const optA = document.querySelector("#opnA");
  let veraozao = document.getElementById("#versao");

  let optionValue = select.options[select.selectedIndex];
  
  let value=optionValue.value;
  let text=optionValue.text;
  optA.href = value;
}
AltereOpcoes();
AltereAndroid();