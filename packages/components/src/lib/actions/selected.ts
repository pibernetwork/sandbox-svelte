import { createEventDispatcher } from 'svelte';

export interface SelectEventProps {
  selected: string | null;
}

export function createSelectEvent() {
  const dispatchSelected = createEventDispatcher<{ setSelected: SelectEventProps }>();

  return (id: string | null) =>
    dispatchSelected('setSelected', {
      selected: id
    });
}
