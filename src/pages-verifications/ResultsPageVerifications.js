import DefaultPageVerifications from './DefaultPageVerifications';
import step from '../utils/StepDecorator';

export default class ResultsPageVerifications extends DefaultPageVerifications {
    @step('Verify that Book Info from the UI is equal to correct Book Info')
    bookHasCorrectInfo(uiBook, book) {
        expect(uiBook).to.deep.equal(book);
        return this;
    }
}
