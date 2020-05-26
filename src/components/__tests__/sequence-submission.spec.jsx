import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from '@testing-library/react';
import SequenceSubmission from '../sequence-submission';

afterEach(cleanup);

describe('SequenceSubmission', () => {
  test('should render', () => {
    const { asFragment } = render(<SequenceSubmission />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with sequence is too short error', () => {
    const { asFragment } = render(<SequenceSubmission value="ACTG" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with sequence is invalid error', () => {
    const { asFragment } = render(<SequenceSubmission
      value="ACTGUACTGUACTGU+"
    />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with sequence is missing error', () => {
    const { asFragment } = render(<SequenceSubmission value="  " />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should validate after onChange event', async () => {
    const { queryByTestId } = render(<SequenceSubmission />);
    const textarea = queryByTestId('sequence-submission-input');
    fireEvent.change(textarea, { target: { value: 'ACTG' } });
    const error = await waitForElement(() =>
      queryByTestId('sequence-submission-error')
    );
    expect(error).toBeTruthy();
  });

  test('should call custom onChange callback once', async () => {
    const onChange = jest.fn();
    const value = 'A';
    const { queryByTestId } = render(<SequenceSubmission
      onChange={e => onChange(e)}
    />);
    const textarea = queryByTestId('sequence-submission-input');
    fireEvent.change(textarea, { target: { value } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(value);
  });
});
