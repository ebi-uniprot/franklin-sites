/* eslint-disable no-param-reassign */
import { useRef, useCallback } from 'react';
import { debounce } from 'lodash-es';
import { schedule } from 'timing-functions';

// Needs to match the style (would be good to come from CSS modules)
// Needs to use this when using custom checkboxes (in cards for example)
export const checkboxCellSelector = '.checkbox-cell';

// Use debounce to wait until the next tick (0 and `leading: false`)
export const updateSelectAllCheckbox = debounce(
  (
    checkboxContainer?: HTMLElement | null,
    selectAllCheckbox?: HTMLInputElement | null
  ) => {
    if (!checkboxContainer || !selectAllCheckbox) {
      return;
    }
    const allCheckboxes = checkboxContainer?.querySelectorAll<HTMLInputElement>(
      `${checkboxCellSelector} > input[type="checkbox"]`
    );
    if (allCheckboxes?.length) {
      const checkedCheckboxes =
        checkboxContainer.querySelectorAll<HTMLInputElement>(
          `${checkboxCellSelector} > input[type="checkbox"]:checked`
        );
      if (
        checkedCheckboxes?.length &&
        allCheckboxes.length !== checkedCheckboxes.length
      ) {
        // Mixed state
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = true;
      } else {
        // Or all, or nothing
        selectAllCheckbox.checked = Boolean(checkedCheckboxes?.length);
        selectAllCheckbox.indeterminate = false;
      }
    } else {
      selectAllCheckbox.checked = false;
      selectAllCheckbox.indeterminate = false;
    }
  },
  0,
  { leading: false }
);

const useDataCheckboxes = (
  onSelectionChange?: (event: MouseEvent | KeyboardEvent) => void
) => {
  // HTML elements refs
  const privateSelectAllRef = useRef<HTMLInputElement | null>(null);
  const privateCheckboxContainerRef = useRef<HTMLTableSectionElement | null>(
    null
  );
  const lastTickedRef = useRef<HTMLInputElement | null>(null);

  // Bind click event to native event on select-all checkbox
  const selectAllRef = useCallback((selectAll: HTMLInputElement | null) => {
    privateSelectAllRef.current = selectAll;
    if (!selectAll) {
      return;
    }
    const listener = () => {
      const allCheckboxes =
        privateCheckboxContainerRef.current?.querySelectorAll<HTMLInputElement>(
          `${checkboxCellSelector} > input[type="checkbox"]`
        );
      if (!allCheckboxes?.length) {
        return;
      }
      // should check all boxes if is checked
      const shouldBeChecked = selectAll.checked;
      selectAll.disabled = true;
      schedule().then(() => {
        for (const checkbox of allCheckboxes.values()) {
          // If inconsistent state, click to sync
          if (shouldBeChecked !== checkbox.checked) {
            checkbox.click(); // Needs to click to trigger event
          }
        }
        selectAll.disabled = false;
      });
    };
    selectAll.addEventListener('click', listener);
    // eslint-disable-next-line consistent-return
    return () => {
      selectAll.removeEventListener('click', listener);
    };
  }, []);

  // Bind click event to native event using event delegation on container
  const checkboxContainerRef = useCallback(
    (checkboxContainer: HTMLTableSectionElement | null) => {
      privateCheckboxContainerRef.current = checkboxContainer;
      if (!(onSelectionChange && checkboxContainer)) {
        return;
      }

      const listener = (event: Event) => {
        const { target } = event;
        if (
          !(
            (event instanceof MouseEvent || event instanceof KeyboardEvent) &&
            target instanceof HTMLElement &&
            target.parentElement?.matches(checkboxCellSelector)
          )
        ) {
          // Not the target labels or checkboxes, bail
          return;
        }

        if (event.shiftKey) {
          // Remove the default text selection that might happen
          window.getSelection()?.removeAllRanges();
        }

        if (!(target instanceof HTMLInputElement)) {
          // If it's not the checkbox, it's the label, bail, another event will come
          return;
        }

        if (event.shiftKey) {
          const checkboxes = Array.from(
            checkboxContainer.querySelectorAll<HTMLInputElement>(
              `${checkboxCellSelector} > input[type="checkbox"]`
            ) || []
          );
          let firstIndex = Math.max(
            0,
            lastTickedRef.current
              ? checkboxes.indexOf(lastTickedRef.current)
              : 0
          );
          let lastIndex = checkboxes.indexOf(target);
          if (lastIndex < firstIndex) {
            // Switch order if the last is before the first
            [firstIndex, lastIndex] = [lastIndex, firstIndex + 1];
          }

          // not immediately, fires native events that are handled synchronously
          schedule().then(() => {
            // loop on all the checkboxes within the range
            for (const checkbox of checkboxes.slice(firstIndex, lastIndex)) {
              if (
                // if the target is checked, check all the others
                (target.checked && !checkbox.checked) ||
                // if the target is unchecked, uncheck all the others
                (!target.checked && checkbox.checked)
              ) {
                // Artificially click them all to trigger click events
                checkbox.click();
              }
            }
          });
        }

        // No way to test that as we can't generate trusted events in tests
        /* istanbul ignore next */
        if (event.isTrusted) {
          // user-generated event, keep track of target as last toggled checkbox
          lastTickedRef.current = target;
        }

        // Toggle select all accordingly
        updateSelectAllCheckbox(checkboxContainer, privateSelectAllRef.current);

        // Call user event handler with the native event
        onSelectionChange(event);
      };

      checkboxContainer?.addEventListener('click', listener);
      // eslint-disable-next-line consistent-return
      return () => {
        checkboxContainer?.removeEventListener('click', listener);
      };
    },
    [onSelectionChange]
  );

  const checkSelectAllSync = useCallback(() => {
    updateSelectAllCheckbox(
      privateCheckboxContainerRef.current,
      privateSelectAllRef.current
    );
  }, []);

  return {
    selectAllRef,
    checkboxContainerRef,
    checkSelectAllSync,
  };
};

export default useDataCheckboxes;
