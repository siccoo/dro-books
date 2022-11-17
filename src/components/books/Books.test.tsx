import { render, waitFor, screen } from "@testing-library/react"
import Books from "./Books";
import * as api from "../../utils/http-common";

jest.mock("../../utils/http-common");

describe("Books Component", () => {
    it("should render books name when api responds", async () => {
        api.mockResolvedValue({
            results: [{ name: "A Game of Thrones" }]
        })

        render(<Books />);
        await waitFor(() => {
            screen.getByText("A Game of Thrones")
        });
    })
})