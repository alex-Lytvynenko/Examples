import BookResource from './BookResource';

export const amazon = 'Amazon';

export const userName = 'sca51236@awsoo.com';
export const password = 'sca51236';
export const helloUsername = 'Hello, Alex';
export const searchBy = 'javascript';
export const booksCategory = 'Books';
export const bookName = 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)';

export const javaScriptTheDefinitiveGuideBook = new BookResource(
    bookName,
    'May 13, 2011',
    'by David Flanagan',
    'Paperback',
    '$28.00'
);

export const threshold = 3;
export const timeout = 15000;
export const pollingTime = 500;
