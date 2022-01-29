import { render } from '@testing-library/react';
import BookDetailTemplate from '.';
import { BrowserRouter } from 'react-router-dom';

it('bookdetial', () => {
  render(
    <BrowserRouter>
      <BookDetailTemplate
        header={undefined}
        body={undefined}
        footer={undefined}
      ></BookDetailTemplate>
    </BrowserRouter>,
  );
});
