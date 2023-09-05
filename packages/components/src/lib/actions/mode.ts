import type { PageMode } from '$lib/types';
import { createEventDispatcher } from 'svelte';

export interface ModeEventProps {
  mode: PageMode;
}

export function createModeEvent() {
  const dispatch = createEventDispatcher<{ setMode: ModeEventProps }>();

  return (mode: PageMode) =>
    dispatch('setMode', {
      mode
    });
}
