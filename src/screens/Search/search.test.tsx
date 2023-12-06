import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse"
import { fireEvent, render, screen, waitFor } from "@__tests__/utils/CustomRender"
import { Search } from "@screens/Search"
import { api } from "@services/api"

describe('Screen: Search', () => {
  it('should be show city option', async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityAPIResponse })

    render(<Search />)

    const searchInput = screen.getByTestId('search-input')
    fireEvent.changeText(searchInput, "Espirito Santo")

    const option = await waitFor(() => screen.findByText(/Espirito Santo/i))

    expect(option).toBeTruthy()
  })
})