import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import EvidenceTag from '../evidence-tag';

jest.mock('uuid', () => {
  return {
    v1: jest.fn(() => 'abcd'),
  };
});

describe('EvidenceTag component', () => {
  test('should render tag and toggle visibility of content', () => {
    const { asFragment, getByTestId } = render(
      <EvidenceTag label="My evidence" title="My title">
        <p>Some content</p>
      </EvidenceTag>
    );
    const contentNode = getByTestId('evidence-tag-content');
    expect(
      contentNode.classList.contains('evidence-tag-content--visible')
    ).toBe(false);
    const triggerNode = getByTestId('evidence-tag-trigger');
    fireEvent.click(triggerNode);
    expect(
      contentNode.classList.contains('evidence-tag-content--visible')
    ).toBe(true);
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(() => cleanup());
});
