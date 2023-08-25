//  Hàm này lấy dữ liệu về các mẫu xe Corolla từ API của Cars by API Ninjas.
export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "01e213a93fmsh01563a69f119897p1ab743jsn40c3151b54e9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
