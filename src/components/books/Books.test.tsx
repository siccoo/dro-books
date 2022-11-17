import { render, waitFor, screen } from "@testing-library/react"
import Books from "./Books";
import * as api from "../../utils/http-common";

jest.mock("../../utils/http-common");

describe("Books Component", () => {
    it("should render books name when api responds", async () => {
        // api.default({
        //     results: [{ name: "A Game of Thrones" }]
        // })
        render(<Books />);
        await waitFor(() => {
            screen.getByText("A Game of Thrones")
        });
    })

    it("should render error when api fails", async() => {
        api.default({})
        render(<Books />);
        await waitFor(() => {
            screen.getByText("Unable to fetch data")
        });
    })
})