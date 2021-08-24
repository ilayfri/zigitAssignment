export async function postRequest(type: string, request: String, body: String) {
  let requestOptions = {
    method: type,
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  };
  if (type == "POST") {
    let requestOptionsWithBody = { ...requestOptions, body: body.toString() };
    requestOptions = requestOptionsWithBody;
  }

  try {
    const response = await fetch(
      "https://private-052d6-testapi4528.apiary-mock.com/" + request,
      requestOptions
    );
    if (!response.ok) {
      throw new Error("Some error occurred (code: " + response.status + ")");
    }
    const data = await response.json();
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}
