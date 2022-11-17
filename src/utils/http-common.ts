import axios from "axios";

export default axios.create({
  method: 'GET',
  baseURL: "https://www.anapioficeandfire.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

export function mockResolvedValue(arg0: { results: { name: string; }[]; }) {
    throw new Error("Function not implemented.");
}

export function mockRejectedValue(arg0: { results: { name: string; }[]; }) {
    throw new Error("Function not implemented.");
}
