import LandingPage from "../LandingPage";
import { shallow } from 'enzyme';
import { fireEvent, getByTestId } from "@testing-library/dom";
import ReactDOM from 'readt-dom';

it('renders without crashing', () => {
    const div = document.createElement(div);
    ReactDOM.render(<LandingPage />, div);
});


describe('Test Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Button onClick={mockCallBack}>Successful</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })
})

test("Click", () => {
    const {container} = render(<LandingPage />);

    const button = getByTestId(container, 'btn-how-to-choose-provider');
    fireEvent.click(button);
});