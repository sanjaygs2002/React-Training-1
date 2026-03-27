"use server";
export default async function Server(formData) {
  const name = formData.get("name");
  console.log(name);
}
