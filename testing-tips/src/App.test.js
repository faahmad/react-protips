import React from "react";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import App from "./App";
import * as todoService from './services/todo-service'

jest.mock('./services/todo-service');
const mockTodoData = {
  userId: "mockUserId",
  id: 0,
  title: "mock todo",
  completed: false
}
todoService.fetchTodoById.mockResolvedValue({ data: mockTodoData })


describe("App", () => {
  describe("when loading", () => {
    it("should display loading text", () => {
      const { getByText } = render(<App />)
      expect(todoService.fetchTodoById).toHaveBeenCalledWith(1);
      expect(getByText('Loading...')).toBeInTheDocument();
    })
  })
  describe("when done loading", () => {
    it('should display the todo data', async () => {
      const { getByText, queryByText } = render(<App />)
      await waitForElementToBeRemoved(() => queryByText('Loading...'));
      expect(getByText(mockTodoData.title)).toBeInTheDocument();
    })
  })
})
