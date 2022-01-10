import { screen, render, fireEvent } from '@testing-library/react';

import SequenceSubmission from '../sequence-submission';
import { validResponse } from '../../sequence-utils/sequenceValidator';

describe('SequenceSubmission', () => {
  it('should render', () => {
    const { asFragment } = render(<SequenceSubmission />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with sequence is invalid error', () => {
    const { asFragment } = render(
      <SequenceSubmission value="ACTGUACTGUACTGU+" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with sequence is missing error', () => {
    const { asFragment } = render(<SequenceSubmission value="            " />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should validate after onChange event', async () => {
    render(<SequenceSubmission />);
    const textarea = screen.getByTestId('sequence-submission-input');
    fireEvent.change(textarea, { target: { value: 'ACTGUACTGUACTGU+' } });
    const error = await screen.findByTestId('sequence-submission-error');
    expect(error).toBeInTheDocument();
  });

  it('should call custom onChange callback once', async () => {
    const onChange = jest.fn();
    const value = 'ACTGUACTGUACTGU';
    render(<SequenceSubmission onChange={(e) => onChange(e)} />);
    const textarea = screen.getByTestId('sequence-submission-input');
    fireEvent.change(textarea, { target: { value } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith([
      {
        ...validResponse,
        header: '',
        name: '',
        sequence: value,
        likelyType: 'na',
        raw: value,
      },
    ]);
  });
});
