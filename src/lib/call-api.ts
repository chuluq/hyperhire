export async function getFooter() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer`);
  const footer = await data.json();

  return footer;
}

export async function getCard() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/card`);
  const card = await data.json();

  return card;
}

export async function getTextIcon() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/text-icon`);
  const textIcon = await data.json();

  return textIcon;
}

export async function getBoxInfo() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/box-info`);
  const boxInfo = await data.json();

  return boxInfo;
}

export async function getCheckbox() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkbox`);
  const checkbox = await data.json();

  return checkbox;
}
