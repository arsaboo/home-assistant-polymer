import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

import '../components/demo-cards.js';

const CONFIGS = [
  {
    heading: 'Title, dialog, toggle',
    config: `
- type: picture-glance
  image: https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg
  title: Living room
  entities:
    - switch.decorative_lights
    - light.ceiling_lights
    - binary_sensor.movement_backyard
    - binary_sensor.basement_floor_wet
    `
  },
  {
    heading: 'Title, dialog, no toggle',
    config: `
- type: picture-glance
  image: https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg
  title: Living room
  entities:
    - binary_sensor.movement_backyard
    - binary_sensor.basement_floor_wet
    `
  },
  {
    heading: 'Title, no dialog, toggle',
    config: `
- type: picture-glance
  image: https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg
  title: Living room
  entities:
    - switch.decorative_lights
    - light.ceiling_lights
    `
  },
  {
    heading: 'No title, dialog, toggle',
    config: `
- type: picture-glance
  image: https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg
  entities:
    - switch.decorative_lights
    - light.ceiling_lights
    - binary_sensor.movement_backyard
    - binary_sensor.basement_floor_wet
    `
  },
  {
    heading: 'No title, dialog, no toggle',
    config: `
- type: picture-glance
  image: https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg
  entities:
    - binary_sensor.movement_backyard
    - binary_sensor.basement_floor_wet
    `
  },
  {
    heading: 'No title, no dialog, toggle',
    config: `
- type: picture-glance
  image: https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg
  entities:
    - switch.decorative_lights
    - light.ceiling_lights
    `
  },
];

class DemoPicGlance extends PolymerElement {
  static get template() {
    return html`
      <demo-cards configs="[[_configs]]"></demo-cards>
    `;
  }

  static get properties() {
    return {
      _configs: {
        type: Object,
        value: CONFIGS
      }
    };
  }
}

customElements.define('demo-hui-picture-glance-card', DemoPicGlance);
