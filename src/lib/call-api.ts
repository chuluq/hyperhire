export async function getFooter() {
  let data = await fetch('http://localhost:3000/api/footer');
  let footer = await data.json();

  return footer;
}

export async function getCard() {
  let data = await fetch('http://localhost:3000/api/card');
  let card = await data.json();

  return card;
}

export async function getTextIcon() {
  let data = await fetch('http://localhost:3000/api/text-icon');
  let textIcon = await data.json();

  return textIcon;
}

export async function getBoxInfo() {
  let data = await fetch('http://localhost:3000/api/box-info');
  let boxInfo = await data.json();

  return boxInfo;
}

export async function getCheckbox() {
  let data = await fetch('http://localhost:3000/api/checkbox');
  let checkbox = await data.json();

  return checkbox;
}
