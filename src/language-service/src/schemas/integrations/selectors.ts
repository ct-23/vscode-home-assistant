/**
 * Selectors
 * Source: https://github.com/home-assistant/core/blob/dev/homeassistant/helpers/selector.py
 */
import { Domain, DeviceClasses, Entity, PositiveInteger } from "../types";

export type Selector =
  | ActionSelector
  | AddonSelector
  | AreaSelector
  | AttributeSelector
  | BooleanSelector
  | ColorRGBSelector
  | ColorTempSelector
  | DateSelector
  | DateTimeSelector
  | DeviceSelector
  | DurationSelector
  | EntitySelector
  | IconSelector
  | LocationSelector
  | MediaSelector
  | NumberSelector
  | ObjectSelector
  | SelectSelector
  | TargetSelector
  | TemplateSelector
  | TextSelector
  | ThemeSelector
  | TimeSelector;

export interface ActionSelector {
  /**
   * The action selector allows the user to input one or more sequences of actions.
   * https://www.home-assistant.io/docs/blueprint/selectors/#action-selector
   */
  action: null | Record<string, never>;
}

export interface AddonSelector {
  /**
   * The add-on selector allows the user to input an add-on slug. On the user interface, it will list all installed add-ons and use the slug of the selected add-on.
   * https://www.home-assistant.io/docs/blueprint/selectors/#add-on-selector
   */
  addon: null | Record<string, never>;
}

export interface AreaSelector {
  /**
   * The area selector shows an area finder that can pick a single area. The value of the input will be the area ID of the user-selected area.
   * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
   */
  area: {
    /**
     * When device options are provided, the list of areas is filtered by areas that at least provide one device that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
     */
    device?: {
      /**
       * Can be set to an integration domain. Limits the list of areas that provide devices by the set integration domain.
       * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
       */
      integration?: Domain;

      /**
       * When set, it limits the list of areas that provide devices by the set manufacturer name.
       * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
       */
      manufacturer?: string;

      /**
       * When set, it limits the list of areas that provide devices that have the set model.
       * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
       */
      model?: string;
    };

    /**
     * When entity options are provided, the list of areas is filtered by areas that at least provide one entity that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
     */
    entity?: {
      /**
       * Limits the list of areas that provide entities of a certain domain, for example, light or binary_sensor.
       * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
       */
      domain?: Domain | Domain[];

      /**
       * Limits the list of areas to areas that have entities with a certain device class, for example, motion or window.
       * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
       */
      device_class?: DeviceClasses;

      /**
       * Can be set to an integration domain. Limits the list of areas that provide entities by the set integration domain.
       * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
       */
      integration?: Domain;
    };

    /**
     * Allows selecting multiple areas. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#area-selector
     */
    multiple?: boolean;
  } | null;
}

export interface AttributeSelector {
  /**
   * The attributes selector shows a list of state attribites from a provided entity of which one can be selected.
   * https://www.home-assistant.io/docs/blueprint/selectors/#attribute-selector
   */
  attribute: {
    /**
     * The entity ID of which an state attribute can be selected from.
     * https://www.home-assistant.io/docs/blueprint/selectors/#attribute-selector
     */
    entity_id: Entity;
  };
}

export interface BooleanSelector {
  /**
   * The boolean selector shows a toggle that allows the user to turn on or off the selected option.
   * https://www.home-assistant.io/docs/blueprint/selectors/#boolean-selector
   */
  boolean: null | Record<string, never>;
}

export interface ColorRGBSelector {
  /**
   * The date selector shows a date input that allows the user to specify a date.
   * https://www.home-assistant.io/docs/blueprint/selectors/#date-selector
   */
  color_rgb: null | Record<string, never>;
}

export interface ColorTempSelector {
  /**
   *
   * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
   */
  color_temp: {
    /**
     * The minimum color temperature in mireds.
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    min_mireds?: PositiveInteger;

    /**
     * The maximum color temperature in mireds.
     * https://www.home-assistant.io/docs/blueprint/selectors/#color-temperature-selector
     */
    max_mireds?: PositiveInteger;
  } | null;
}

export interface DateSelector {
  /**
   * The date selector shows a date input that allows the user to specify a date.
   * https://www.home-assistant.io/docs/blueprint/selectors/#date-selector
   */
  date: null | Record<string, never>;
}

export interface DateTimeSelector {
  /**
   * The date selector shows a date and time input that allows the user to specify a date with a specific time.
   * https://www.home-assistant.io/docs/blueprint/selectors/#date--time-selector
   */
  datetime: null | Record<string, never>;
}

export interface DeviceSelector {
  /**
   * The device selector shows a device finder that can pick a single device.
   * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
   */
  device: {
    /**
     * When entity options are provided, the list of devices is filtered by devices that at least provide one entity that matches the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    entity?: {
      /**
       * Can be set to an integration domain. Limits the list of devices that provide entities by the set integration domain.
       * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
       */
      integration?: Domain;
      /**
       * Limits the list of devices that provide entities of a certain domain.
       * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
       */
      domain?: Domain | Domain[];
      /**
       * Limits the list of entities to entities that have a certain device class.
       * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
       */
      device_class?: DeviceClasses;
    };

    /**
     * Can be set to an integration domain. Limits the list of devices to devices provided by the set integration domain.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    integration?: Domain;

    /**
     * When set, it limits the list of devices to devices provided by the set manufacturer name.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    manufacturer?: string;

    /**
     * When set, it limits the list of devices to devices that have the set model.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    model?: string;

    /**
     * Allows selecting multiple devices. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#device-selector
     */
    multiple?: boolean;
  } | null;
}

export interface DurationSelector {
  /**
   * The duration select allow the user to select a time duration. This can be helpful for, e.g., delays or offsets.
   * https://www.home-assistant.io/docs/blueprint/selectors/#duration-selector
   */
  duration: {
    /**
     * Set to true to display the input as a multi-line text box on the user interface.
     * https://www.home-assistant.io/docs/blueprint/selectors/#duration-selector
     */
    enable_day?: boolean;
  } | null;
}

export interface EntitySelector {
  /**
   * The entity selector shows an entity finder that can pick a single entity.
   * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
   */
  entity: {
    /**
     * List of entity IDs to exclude from the selectable list.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    exclude_entities?: Entity[];

    /**
     * List of entity IDs to limit the selectable list to.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    include_entities?: Entity[];

    /**
     * Can be set to an integration domain. Limits the list of devices that provide entities by the set integration domain.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    integration?: Domain;

    /**
     * Limits the list of devices that provide entities of a certain domain.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    domain?: Domain | Domain[];

    /**
     * Limits the list of entities to entities that have a certain device class.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    device_class?: DeviceClasses;

    /**
     * Allows selecting multiple devices. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#entity-selector
     */
    multiple?: boolean;
  } | null;
}

export interface IconSelector {
  /**
   * The icon selector shows an icon picker that allows the user to select an icon.
   * https://www.home-assistant.io/docs/blueprint/selectors/#icon-selector
   */
  icon: {
    /**
     * Placeholder icon to show, when no icon is selected.
     * https://www.home-assistant.io/docs/blueprint/selectors/#icon-selector
     */
    placeholder?: string;
  } | null;
}

export interface LocationSelector {
  /**
   * The icon selector shows an icon picker that allows the user to select an icon.
   * https://www.home-assistant.io/docs/blueprint/selectors/#location-selector
   */
  location: {
    /**
     * An optional icon to show on the map.
     * https://www.home-assistant.io/docs/blueprint/selectors/#location-selector
     */
    icon?: string;

    /**
     * Allow selecting the radius of the location. If enabled, the radius will be returned in meters.
     * https://www.home-assistant.io/docs/blueprint/selectors/#location-selector
     */
    radius?: boolean;
  } | null;
}

export interface MediaSelector {
  /**
   * The media selector is a powerful selector that allows a user to easily select media to play on a media device.
   * https://www.home-assistant.io/docs/blueprint/selectors/#media-selector
   */
  media: null | Record<string, never>;
}

export interface NumberSelector {
  /**
   * The number selector shows either a number input or a slider input, that allows the user to specify a numeric value.
   * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
   */
  number: {
    /**
     * The maximum user-settable number value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    max: number;

    /**
     * The minimal user-settable number value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    min: number;

    /**
     * This can be either box or slider mode.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    mode?: "box" | "slider";

    /**
     * The step value of the number value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    step?: number;

    /**
     * Unit of measurement in which the number value is expressed in.
     * https://www.home-assistant.io/docs/blueprint/selectors/#number-selector
     */
    unit_of_measurement?: string;
  };
}

export interface ObjectSelector {
  /**
   * The object selector can be used to input arbitrary data in YAML form. This is useful for e.g. lists and dictionaries like service data.
   * https://www.home-assistant.io/docs/blueprint/selectors/#object-selector
   */
  object: null | Record<string, never>;
}

export interface SelectSelector {
  /**
   * The select selector shows a list of available options from which the user can choose.
   * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
   */
  select: {
    /**
     * Allows the user to enter and select a custom value (or multiple custom values in addition to the listed options if `multiple` is set to true).
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    custom_value?: boolean;

    /**
     * This can be either `list` or `dropdown` mode. when not specificied, small lists (5 items or less), are displayed as radio buttons. When more items are added, a dropdown list is used.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    mode?: "list" | "dropdown";

    /**
     * Allows selecting multiple options. If set to `true`, the resulting value of this selector will be a list instead of a single string value.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    multiple?: boolean;

    /**
     * List of options that the user can choose from.
     * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
     */
    options:
      | string[]
      | {
          /**
           * The description to show in the UI for this item.
           * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
           */
          label: string;

          /**
           * The value to return when this label is selected.
           * https://www.home-assistant.io/docs/blueprint/selectors/#select-selector
           */
          value: string;
        }[];
  };
}

export interface TargetSelector {
  /**
   * The target selector is a rather special selector, allowing the user to select targeted entities, devices or areas for service calls.
   * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
   */
  target: {
    /**
     * When device options are provided, the targets are limited by devices that at least match the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
     */
    device?: {
      /**
       * Can be set to an integration domain. Limits the device targets that are provided devices by the set integration domain.
       * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
       */
      integration?: Domain;

      /**
       * When set, it limits the targets to devices provided by the set manufacturer name.
       * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
       */
      manufacturer?: string;

      /**
       * When set, it limits the targets to devices by the set model.
       * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
       */
      model?: string;
    };

    /**
     * When entity options are provided, the targets are limited by entities that at least match the given conditions.
     * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
     */
    entity?: {
      /**
       * Limits the targets to entities of a certain domain, for example, light or binary_sensor.
       * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
       */
      domain?: Domain | Domain[];

      /**
       * Limits the targets to entities with a certain device class, for example, motion or window.
       * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
       */
      device_class?: DeviceClasses;

      /**
       * Can be set to an integration domain. Limits targets to entities provided by the set integration domain.
       * https://www.home-assistant.io/docs/blueprint/selectors/#target-selector
       */
      integration?: Domain;
    };
  } | null;
}

export interface TemplateSelector {
  /**
   * The template can be used for allowing the user to input a Jinja2 template.
   * https://www.home-assistant.io/docs/blueprint/selectors/#template-selector
   */
  template: null | Record<string, never>;
}

export interface TextSelector {
  /**
   * The text selector can be used to input a text string.
   * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
   */
  text: {
    /**
     * Set to true to display the input as a multi-line text box on the user interface.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    multiline?: boolean;

    /**
     * Set to true to display the input as a multi-line text box on the user interface.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    suffix?: string;

    /**
     * The type of input. This is a browser hint, which can improve the client side validation of the input. The value isn't validated by the backend.
     * https://www.home-assistant.io/docs/blueprint/selectors/#text-selector
     */
    type?:
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "month"
      | "number"
      | "password"
      | "search"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week";
  } | null;
}

export interface ThemeSelector {
  /**
   * The theme selector allows for selecting a theme from the available themes installed in Home Assistant.
   * https://www.home-assistant.io/docs/blueprint/selectors/#theme-selector
   */
  theme: null | Record<string, never>;
}

export interface TimeSelector {
  /**
   * The time selector shows a time input that allows the user to specify a time of the day.
   * https://www.home-assistant.io/docs/blueprint/selectors/#time-selector
   */
  time: null | Record<string, never>;
}
