import type { PageMode } from '$lib/types';
import { createEventDispatcher } from 'svelte';

export interface SetStateProps {
  selected: string | null;
  isOpen: boolean;
  mode: PageMode;
}

export function createStateEvent() {
  const dispatchSelected = createEventDispatcher<{ setState: SetStateProps }>();

  return (state: SetStateProps) =>
    dispatchSelected('setState', {
      ...state
    });
}
