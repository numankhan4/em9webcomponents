import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emit } from '../../internal/event';
import { watch } from '../../internal/watch';
import styles from './resize-observer.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - One or more elements to watch for resizing.
 *
 * @event {{ entries: ResizeObserverEntry[] }} em9-resize - Emitted when the element is resized.
 */
@customElement('em9-resize-observer')
export default class em9ResizeObserver extends LitElement {
  static styles = styles;

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];

  /** Disables the observer. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      emit(this, 'em9-resize', { detail: { entries } });
    });

    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }

  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }

  startObserver() {
    const slot = this.shadowRoot!.querySelector('slot');

    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true }) as HTMLElement[];

      // Unwatch previous elements
      this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
      this.observedElements = [];

      // Watch new elements
      elements.forEach(el => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }

  stopObserver() {
    this.resizeObserver.disconnect();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'em9-resize-observer': em9ResizeObserver;
  }
}
