import { createEventDispatcher } from 'svelte';

export interface SelectEventProps {
  selected: string | null;
}

export function createSelectEvent() {
  const dispatchSelected = createEventDispatcher<{ changeSelected: SelectEventProps }>();

  return (id: string | null) =>
    dispatchSelected('changeSelected', {
      selected: id
    });
}
