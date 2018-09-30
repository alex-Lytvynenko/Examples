import LandingPage from './LandingPage';
import step from '../utils/StepDecorator';
import BookResource from '../model/BookResource';
import { bookName } from '../model/Constants';
import BookElement, { locator } from '../components/BookElement';

export default class ResultsPage extends LandingPage {
    @step('Get title, date, author, bookType and price of the book')
    getBookInfo() {
        const title = BookElement.of(bookName)
            .child(locator.title)
            .getValue();
        const date = BookElement.of(bookName)
            .child(locator.date)
            .getValue();
        const author = BookElement.of(bookName)
            .child(locator.author)
            .getValue();
        const bookType = BookElement.of(bookName)
            .child(locator.bookType)
            .getValue();
        const priceSign = BookElement.of(bookName)
            .child(locator.priceSign)
            .getValue();
        const priceWhole = BookElement.of(bookName)
            .child(locator.priceWhole)
            .getValue();
        const priceFract = BookElement.of(bookName)
            .child(locator.priceFractional)
            .getValue();
        const price = `${priceSign}${priceWhole}.${priceFract}`;
        return new BookResource(title, date, author, bookType, price);
    }
}
