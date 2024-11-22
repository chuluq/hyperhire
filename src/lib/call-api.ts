export async function getFooter() {
  const data = await fetch('http://localhost:3000/api/footer');
  const footer = await data.json();

  return footer;
}

export async function getCard() {
  const data = await fetch('http://localhost:3000/api/card');
  const card = await data.json();

  return card;
}

export async function getTextIcon() {
  const data = await fetch('http://localhost:3000/api/text-icon');
  const textIcon = await data.json();

  return textIcon;
}

export async function getBoxInfo() {
  const data = await fetch('http://localhost:3000/api/box-info');
  const boxInfo = await data.json();

  return boxInfo;
}

export async function getCheckbox() {
  const data = await fetch('http://localhost:3000/api/checkbox');
  const checkbox = await data.json();

  return checkbox;
}
