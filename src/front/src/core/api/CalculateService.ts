import { dataType } from "../utils/utils";

export const calculate = async (data: any): Promise<dataType | {detail: any[]}> => {
  const response = await fetch('http://127.0.0.1:8004/well_model/calc', {
    body: JSON.stringify(data),
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
