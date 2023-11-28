export default async function allFetch(
  url,
  method,
  body = {},
  token = undefined
) {
  const header = token
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
      };

  try {
    const res = await fetch(url, {
      method: method,
      headers: header,
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
