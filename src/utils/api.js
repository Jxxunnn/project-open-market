export const API_END_POINT = "https://test.api.weniv.co.kr";

export const request = async (url, option = {}) => {
  try {
    const fullUrl = `${API_END_POINT}${url}`;
    const response = await fetch(fullUrl, option);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error("API 통신 실패");
  } catch (error) {
    alert(error.message);
  }
};
