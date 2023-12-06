import { SelectList } from '@components/SelectList'
import { fireEvent, render, screen } from "@testing-library/react-native"

describe("Component: SelectLit", () => {
  it("should be return city details selected", () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'São Paulo', latitude: 234, longitude: 678 },
    ]

    const onPress = jest.fn();

    render(
      <SelectList
        data={data}
        onChange={() => { }}
        onPress={onPress}
      />
    )
    const selectedCity = screen.getByText(/são paulo/i)
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[1])
  })

  it("not should be sho2 options when data props is empty", () => {
    render(
      <SelectList
        data={[]}
        onChange={() => { }}
        onPress={() => { }}
      />
    )

    const options = screen.getByTestId("options")
    expect(options.children).toHaveLength(0)

  })
})