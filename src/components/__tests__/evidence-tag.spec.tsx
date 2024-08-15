import { render, fireEvent, screen } from '@testing-library/react';

import EvidenceTag from '../evidence-tag';

describe('EvidenceTag component', () => {
  it('should render tag and toggle visibility of content', () => {
    const { asFragment } = render(
      <EvidenceTag label="My evidence" title="My title">
        <p>Some content</p>
      </EvidenceTag>
    );
    const contentNode = screen.getByTestId('evidence-tag-content');
    expect(contentNode).not.toHaveClass('evidence-tag-content--visible');
    const triggerNode = screen.getByTestId('evidence-tag-trigger');
    fireEvent.click(triggerNode);
    expect(contentNode).toHaveClass('evidence-tag-content--visible');
    expect(asFragment()).toMatchSnapshot();
  });
});
