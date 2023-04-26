import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../componets/GeneriCard';
import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
};

export default config;

describe('Card component', () => {
  it('fires onClick when button is clicked', () => {
    const onClick = jest.fn();
    const title = 'Test Title';
    const children = <p>Test Children</p>;
    const { getByText } = render(
      <Card title={title} onClick={onClick}>
        {children}
      </Card>
    );
    fireEvent.click(getByText('View Page'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
