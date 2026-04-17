import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve inserir dois comentários e exibi-los na tela', () => {
        render(<PostComment />);

        const commentInput = screen.getByTestId('comment-input');
        const submitButton = screen.getByTestId('comment-submit');

        fireEvent.change(commentInput, { target: { value: 'Comentário 1' } });
        fireEvent.click(submitButton);

        fireEvent.change(commentInput, { target: { value: 'Comentário 2' } });
        fireEvent.click(submitButton);

        expect(screen.getByText('Comentário 1')).toBeInTheDocument();
        expect(screen.getByText('Comentário 2')).toBeInTheDocument();
        expect(screen.getAllByTestId('comment-item')).toHaveLength(2);
    });
});