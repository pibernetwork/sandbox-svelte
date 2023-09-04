import { render, screen } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import MyComponent from './MyComponent.svelte';

describe('Todo', () => {
  test('shows the todo text when rendered', () => {
    render(MyComponent, { props: {} });

    expect(screen.getByText('My Component')).toBeDefined(); // checkbox
  });
});
