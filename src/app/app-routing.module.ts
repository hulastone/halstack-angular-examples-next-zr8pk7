import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModesComponent } from './views/button/button-modes/button-modes.component';

let routes: Routes = [];
routes.push({
  path: 'accordionWithAssistiveText',
  loadChildren: () =>
    import(
      './views/accordion/accordion-with-assistive-text/accordion-with-assistive-text.module'
    ).then((m) => m.AccordionWithAssistiveTextModule),
});

routes.push({
  path: 'accordionWithIcon',
  loadChildren: () =>
    import(
      './views/accordion/accordion-with-icon/accordion-with-icon.module'
    ).then((m) => m.AccordionWithIconModule),
});

routes.push({
  path: 'controlledAccordion',
  loadChildren: () =>
    import(
      './views/accordion/controlled-accordion/controlled-accordion.module'
    ).then((m) => m.ControlledAccordionModule),
});

routes.push({
  path: 'defaultAccordion',
  loadChildren: () =>
    import('./views/accordion/default-accordion/default-accordion.module').then(
      (m) => m.DefaultAccordionModule
    ),
});

routes.push({
  path: 'disabledIconAccordion',
  loadChildren: () =>
    import('./views/accordion/disabled-icon/disabled-icon.module').then(
      (m) => m.DisabledIconModule
    ),
});

routes.push({
  path: 'controlledAccordionGroup',
  loadChildren: () =>
    import(
      './views/accordion-group/controlled-accordion-group/controlled-accordion-group.module'
    ).then((m) => m.ControlledAccordionGroupModule),
});

routes.push({
  path: 'uncontrolledAccordionGroup',
  loadChildren: () =>
    import(
      './views/accordion-group/uncontrolled-accordion-group/uncontrolled-accordion-group.module'
    ).then((m) => m.UncontrolledAccordionGroupModule),
});

routes.push({
  path: 'disabledAccordionGroup',
  loadChildren: () =>
    import(
      './views/accordion-group/disabled-accordion-group/disabled-accordion-group.module'
    ).then((m) => m.DisabledAccordionGroupModule),
});

routes.push({
  path: 'alertWithChildren',
  loadChildren: () =>
    import('./views/alert/alert-with-children/alert-with-children.module').then(
      (m) => m.AlertWithChildrenModule
    ),
});

routes.push({
  path: 'closableInlineAlert',
  loadChildren: () =>
    import(
      './views/alert/closable-inline-alert/closable-inline-alert.module'
    ).then((m) => m.ClosableInlineAlertModule),
});

routes.push({
  path: 'errorAlert',
  loadChildren: () =>
    import('./views/alert/error-alert/error-alert.module').then(
      (m) => m.ErrorAlertModule
    ),
});

routes.push({
  path: 'infoAlert',
  loadChildren: () =>
    import('./views/alert/info-alert/info-alert.module').then(
      (m) => m.InfoAlertModule
    ),
});

routes.push({
  path: 'modalAlert',
  loadChildren: () =>
    import('./views/alert/modal-alert/modal-alert.module').then(
      (m) => m.ModalAlertModule
    ),
});

routes.push({
  path: 'sizedAlert',
  loadChildren: () =>
    import('./views/alert/sized-alert/sized-alert.module').then(
      (m) => m.SizedAlertModule
    ),
});

routes.push({
  path: 'successAlert',
  loadChildren: () =>
    import('./views/alert/success-alert/success-alert.module').then(
      (m) => m.SuccessAlertModule
    ),
});

routes.push({
  path: 'warningAlert',
  loadChildren: () =>
    import('./views/alert/warning-alert/warning-alert.module').then(
      (m) => m.WarningAlertModule
    ),
});

routes.push({
  path: 'basicLayout',
  loadChildren: () =>
    import('./views/application-layout/basic-layout/basic-layout.module').then(
      (m) => m.BasicLayoutModule
    ),
});

routes.push({
  path: 'layoutWithSidenav',
  loadChildren: () =>
    import(
      './views/application-layout/layout-with-sidenav/layout-with-sidenav.module'
    ).then((m) => m.LayoutWithSidenavModule),
});

routes.push({
  path: 'basicBox',
  loadChildren: () =>
    import('./views/box/basic-box/basic-box.module').then(
      (m) => m.BasicBoxModule
    ),
});

routes.push({
  path: '',
  redirectTo: 'undeterminateDefaultProgressBar',
  pathMatch: 'full',
});

//Button
routes.push({ path: 'buttonModes', component: ButtonModesComponent });
routes.push({
  path: 'buttonWithIcon',
  loadChildren: () =>
    import('./views/button/button-with-icon/button-with-icon.module').then(
      (m) => m.ButtonWithIconModule
    ),
});
routes.push({
  path: 'sizedButton',
  loadChildren: () =>
    import('./views/button/sized-button/sized-button.module').then(
      (m) => m.SizedButtonModule
    ),
});
routes.push({
  path: 'fillParentButton',
  loadChildren: () =>
    import('./views/button/fill-parent-button/fill-parent-button.module').then(
      (m) => m.FillParentButtonModule
    ),
});

//Card
routes.push({
  path: 'cardWithAction',
  loadChildren: () =>
    import('./views/card/card-with-action/card-with-action.module').then(
      (m) => m.CardWithActionModule
    ),
});

routes.push({
  path: 'cardWithLink',
  loadChildren: () =>
    import('./views/card/card-with-link/card-with-link.module').then(
      (m) => m.CardWithLinkModule
    ),
});

routes.push({
  path: 'defaultCard',
  loadChildren: () =>
    import('./views/card/default-card/default-card.module').then(
      (m) => m.DefaultCardModule
    ),
});

//Autosuggest
routes.push({
  path: 'autosuggestInput',
  loadChildren: () =>
    import(
      './views/autosuggest/text-input-function-suggestions/text-input-function-suggestions.module'
    ).then((m) => m.TextInputFunctionSuggestionsModule),
});
routes.push({
  path: 'autosuggestFunctionInput',
  loadChildren: () =>
    import(
      './views/autosuggest/text-input-with-suggestions/text-input-with-suggestions.module'
    ).then((m) => m.TextInputWithSuggestionsModule),
});

routes.push({
  path: 'checkboxControlled',
  loadChildren: () =>
    import(
      './views/checkbox/checkbox-controlled/checkbox-controlled.module'
    ).then((m) => m.CheckboxControlledModule),
});
routes.push({
  path: 'checkboxLabelPosition',
  loadChildren: () =>
    import(
      './views/checkbox/checkbox-label-position/checkbox-label-position.module'
    ).then((m) => m.CheckboxLabelPositionModule),
});
routes.push({
  path: 'checkboxSized',
  loadChildren: () =>
    import('./views/checkbox/checkbox-sized/checkbox-sized.module').then(
      (m) => m.CheckboxSizedModule
    ),
});
routes.push({
  path: 'checkboxUncontrolled',
  loadChildren: () =>
    import(
      './views/checkbox/checkbox-uncontrolled/checkbox-uncontrolled.module'
    ).then((m) => m.CheckboxUncontrolledModule),
});

//Chip
routes.push({
  path: 'defaultChip',
  loadChildren: () =>
    import('./views/chip/default-chip/default-chip.module').then(
      (m) => m.DefaultChipModule
    ),
});

routes.push({
  path: 'chipWithIcons',
  loadChildren: () =>
    import('./views/chip/chip-with-icons/chip-with-icons.module').then(
      (m) => m.ChipWithIconsModule
    ),
});

//Date
routes.push({
  path: 'controlledDate',
  loadChildren: () =>
    import('./views/date/controlled-date/controlled-date.module').then(
      (m) => m.ControlledDateModule
    ),
});
routes.push({
  path: 'uncontrolledDate',
  loadChildren: () =>
    import('./views/date/uncontrolled-date/uncontrolled-date.module').then(
      (m) => m.UncontrolledDateModule
    ),
});
routes.push({
  path: 'sizedDate',
  loadChildren: () =>
    import('./views/date/sized-date/sized-date.module').then(
      (m) => m.SizedDateModule
    ),
});

//Date input
routes.push({
  path: 'controlledDateInput',
  loadChildren: () =>
    import(
      './views/date-input/controlled-date-input/controlled-date-input.module'
    ).then((m) => m.ControlledDateInputModule),
});
routes.push({
  path: 'uncontrolledDateInput',
  loadChildren: () =>
    import(
      './views/date-input/uncontrolled-date-input/uncontrolled-date-input.module'
    ).then((m) => m.UncontrolledDateInputModule),
});
routes.push({
  path: 'customErrorDateInput',
  loadChildren: () =>
    import(
      './views/date-input/custom-error-date-input/custom-error-date-input.module'
    ).then((m) => m.CustomErrorDateInputModule),
});
routes.push({
  path: 'dateInputWithHelperText',
  loadChildren: () =>
    import('./views/date-input/date-with-helper/date-with-helper.module').then(
      (m) => m.DateWithHelperModule
    ),
});
routes.push({
  path: 'disabledDateInput',
  loadChildren: () =>
    import(
      './views/date-input/disabled-date-input/disabled-date-input.module'
    ).then((m) => m.DisabledDateInputModule),
});
routes.push({
  path: 'fillParentSizedDateInput',
  loadChildren: () =>
    import(
      './views/date-input/fill-parent-sized-date-input/fill-parent-sized-date-input.module'
    ).then((m) => m.FillParentSizedDateInputModule),
});
routes.push({
  path: 'formattedDateInput',
  loadChildren: () =>
    import(
      './views/date-input/formatted-date-input/formatted-date-input.module'
    ).then((m) => m.FormattedDateInputModule),
});
routes.push({
  path: 'invalidDateInput',
  loadChildren: () =>
    import(
      './views/date-input/invalid-date-input/invalid-date-input.module'
    ).then((m) => m.InvalidDateInputModule),
});
routes.push({
  path: 'optionalDateInput',
  loadChildren: () =>
    import(
      './views/date-input/optional-date-input/optional-date-input.module'
    ).then((m) => m.OptionalDateInputModule),
});

//Dialog
routes.push({
  path: 'closeDialog',
  loadChildren: () =>
    import('./views/dialog/close-dialog/close-dialog.module').then(
      (m) => m.CloseDialogModule
    ),
});
routes.push({
  path: 'defaultDialog',
  loadChildren: () =>
    import('./views/dialog/default-dialog/default-dialog.module').then(
      (m) => m.DefaultDialogModule
    ),
});
routes.push({
  path: 'modalDialog',
  loadChildren: () =>
    import('./views/dialog/modal-dialog/modal-dialog.module').then(
      (m) => m.ModalDialogModule
    ),
});

//Dropdown
routes.push({
  path: 'defaultDropdown',
  loadChildren: () =>
    import('./views/dropdown/default-dropdown/default-dropdown.module').then(
      (m) => m.DefaultDropdownModule
    ),
});
routes.push({
  path: 'defaultDropdownExpandOnHover',
  loadChildren: () =>
    import(
      './views/dropdown/default-dropdown-expand-on-hover/default-dropdown-expand-on-hover.module'
    ).then((m) => m.DefaultDropdownExpandOnHoverModule),
});
routes.push({
  path: 'dropdownWithIcons',
  loadChildren: () =>
    import(
      './views/dropdown/dropdown-with-icons/dropdown-with-icons.module'
    ).then((m) => m.DropdownWithIconsModule),
});

//File-input
routes.push({
  path: 'defaultFileInput',
  loadChildren: () =>
    import(
      './views/file-input/default-file-input/default-file-input.module'
    ).then((m) => m.DefaultFileInputModule),
});
routes.push({
  path: 'disabledFileInput',
  loadChildren: () =>
    import(
      './views/file-input/disabled-file-input/disabled-file-input.module'
    ).then((m) => m.DisabledFileInputModule),
});
routes.push({
  path: 'fileInputModes',
  loadChildren: () =>
    import('./views/file-input/file-input-modes/file-input-modes.module').then(
      (m) => m.FileInputModesModule
    ),
});
routes.push({
  path: 'fileInputWithAcceptedFiles',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-accepted-files/file-input-with-accepted-files.module'
    ).then((m) => m.FileInputWithAcceptedFilesModule),
});
routes.push({
  path: 'fileInputWithError',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-error/file-input-with-error.module'
    ).then((m) => m.FileInputWithErrorModule),
});
routes.push({
  path: 'fileIputWithOneFile',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-one-file/file-input-with-one-file.module'
    ).then((m) => m.FileInputWithOneFileModule),
});
routes.push({
  path: 'fileInputWithPreview',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-preview/file-input-with-preview.module'
    ).then((m) => m.FileInputWithPreviewModule),
});

//Footer
routes.push({
  path: 'customContentFooter',
  loadChildren: () =>
    import(
      './views/footer/custom-contentt-footer/custom-contentt-footer.module'
    ).then((m) => m.CustomContenttFooterModule),
});
routes.push({
  path: 'defaultFooter',
  loadChildren: () =>
    import('./views/footer/default-footer/default-footer.module').then(
      (m) => m.DefaultFooterModule
    ),
});

//Header
routes.push({
  path: 'customHeader',
  loadChildren: () =>
    import('./views/header/custom-header/custom-header.module').then(
      (m) => m.CustomHeaderModule
    ),
});
routes.push({
  path: 'defaultHeader',
  loadChildren: () =>
    import('./views/header/default-header/default-header.module').then(
      (m) => m.DefaultHeaderModule
    ),
});
routes.push({
  path: 'headerWithDropdown',
  loadChildren: () =>
    import(
      './views/header/header-with-dropdown/header-with-dropdown.module'
    ).then((m) => m.HeaderWithDropdownModule),
});

//Heading
routes.push({
  path: 'defaultHeadings',
  loadChildren: () =>
    import('./views/heading/default-headings/default-headings.module').then(
      (m) => m.DefaultHeadingsModule
    ),
});
routes.push({
  path: 'headingsWithDifferentWeights',
  loadChildren: () =>
    import(
      './views/heading/headings-with-different-weights/headings-with-different-weights.module'
    ).then((m) => m.HeadingsWithDifferentWeightsModule),
});

//InputTextModule
routes.push({
  path: 'controlledInputText',
  loadChildren: () =>
    import(
      './views/input-text/controlled-input-text/controlled-input-text.module'
    ).then((m) => m.ControlledInputTextModule),
});
routes.push({
  path: 'fillParentInputText',
  loadChildren: () =>
    import(
      './views/input-text/fill-parent-input-text/fill-parent-input-text.module'
    ).then((m) => m.FillParentInputTextModule),
});
routes.push({
  path: 'preffixSuffixInputText',
  loadChildren: () =>
    import(
      './views/input-text/preffix-suffix-input-text/preffix-suffix-input-text.module'
    ).then((m) => m.PreffixSuffixInputTextModule),
});
routes.push({
  path: 'sizedInputText',
  loadChildren: () =>
    import('./views/input-text/sized-input-text/sized-input-text.module').then(
      (m) => m.SizedInputTextModule
    ),
});
routes.push({
  path: 'uncontrolledInputText',
  loadChildren: () =>
    import(
      './views/input-text/uncontrolled-input-text/uncontrolled-input-text.module'
    ).then((m) => m.UncontrolledInputTextModule),
});

//Link
routes.push({
  path: 'defaultLink',
  loadChildren: () =>
    import('./views/link/default-link/default-link.module').then(
      (m) => m.DefaultLinkModule
    ),
});
routes.push({
  path: 'disabledLink',
  loadChildren: () =>
    import('./views/link/disabled-link/disabled-link.module').then(
      (m) => m.DisabledLinkModule
    ),
});
routes.push({
  path: 'linkWithAction',
  loadChildren: () =>
    import('./views/link/link-with-action/link-with-action.module').then(
      (m) => m.LinkWithActionModule
    ),
});
routes.push({
  path: 'linkWithIcon',
  loadChildren: () =>
    import('./views/link/link-with-icon/link-with-icon.module').then(
      (m) => m.LinkWithIconModule
    ),
});
routes.push({
  path: 'undecoratedLinkWithNewWindow',
  loadChildren: () =>
    import(
      './views/link/undecorated-link-with-new-window/undecorated-link-with-new-window.module'
    ).then((m) => m.UndecoratedLinkWithNewWindowModule),
});

//Number input
routes.push({
  path: 'controlledNumber',
  loadChildren: () =>
    import(
      './views/number-input/controlled-number/controlled-number.module'
    ).then((m) => m.ControlledNumberModule),
});
routes.push({
  path: 'customErrorNumber',
  loadChildren: () =>
    import(
      './views/number-input/custom-error-number/custom-error-number.module'
    ).then((m) => m.CustomErrorNumberModule),
});
routes.push({
  path: 'disabledNumber',
  loadChildren: () =>
    import('./views/number-input/disabled-number/disabled-number.module').then(
      (m) => m.DisabledNumberModule
    ),
});
routes.push({
  path: 'fillParentSizeNumber',
  loadChildren: () =>
    import(
      './views/number-input/fill-parent-size-number/fill-parent-size-number.module'
    ).then((m) => m.FillParentSizeNumberModule),
});
routes.push({
  path: 'helperTextNumber',
  loadChildren: () =>
    import(
      './views/number-input/helper-text-number/helper-text-number.module'
    ).then((m) => m.HelperTextNumberModule),
});
routes.push({
  path: 'invalidNumber',
  loadChildren: () =>
    import('./views/number-input/invalid-number/invalid-number.module').then(
      (m) => m.InvalidNumberModule
    ),
});
routes.push({
  path: 'minMaxStepNumber',
  loadChildren: () =>
    import(
      './views/number-input/min-max-step-number/min-max-step-number.module'
    ).then((m) => m.MinMaxStepNumberModule),
});
routes.push({
  path: 'optionalNumber',
  loadChildren: () =>
    import('./views/number-input/optional-number/optional-number.module').then(
      (m) => m.OptionalNumberModule
    ),
});
routes.push({
  path: 'placeholderNumber',
  loadChildren: () =>
    import(
      './views/number-input/placeholder-number/placeholder-number.module'
    ).then((m) => m.PlaceholderNumberModule),
});
routes.push({
  path: 'prefixNumber',
  loadChildren: () =>
    import('./views/number-input/preffix-number/preffix-number.module').then(
      (m) => m.PreffixNumberModule
    ),
});
routes.push({
  path: 'suffixNumber',
  loadChildren: () =>
    import('./views/number-input/suffix-number/suffix-number.module').then(
      (m) => m.SuffixNumberModule
    ),
});
routes.push({
  path: 'uncontrolledNumber',
  loadChildren: () =>
    import(
      './views/number-input/uncontrolled-number/uncontrolled-number.module'
    ).then((m) => m.UncontrolledNumberModule),
});

//Paginator

routes.push({
  path: 'defaultPaginator',
  loadChildren: () =>
    import('./views/paginator/paginator/default-paginator.module').then(
      (m) => m.DefaultPaginatorModule
    ),
});

//Password
routes.push({
  path: 'controlledPassword',
  loadChildren: () =>
    import(
      './views/password-input/controlled-password/controlled-password.module'
    ).then((m) => m.ControlledPasswordModule),
});
routes.push({
  path: 'customErrorPassword',
  loadChildren: () =>
    import(
      './views/password-input/custom-error-password/custom-error-password.module'
    ).then((m) => m.CustomErrorPasswordModule),
});
routes.push({
  path: 'fillParentSizePassword',
  loadChildren: () =>
    import(
      './views/password-input/fill-parent-size-password/fill-parent-size-password.module'
    ).then((m) => m.FillParentSizePasswordModule),
});

routes.push({
  path: 'lengthConstraintPassword',
  loadChildren: () =>
    import(
      './views/password-input/length-constraint-password/length-constraint-password.module'
    ).then((m) => m.LengthConstraintPasswordModule),
});

routes.push({
  path: 'patternConstraintPassword',
  loadChildren: () =>
    import(
      './views/password-input/pattern-constraint-password/pattern-constraint-password.module'
    ).then((m) => m.PatternConstraintPasswordModule),
});

routes.push({
  path: 'uncontrolledPassword',
  loadChildren: () =>
    import(
      './views/password-input/uncontrolled-password/uncontrolled-password.module'
    ).then((m) => m.UncontrolledPasswordModule),
});

//ProgressBar
routes.push({
  path: 'determinateDefaultProgressBar',
  loadChildren: () =>
    import(
      './views/progress-bar/determinate-default-progress-bar/determinate-default-progress-bar.module'
    ).then((m) => m.DeterminateDefaultProgressBarModule),
});

routes.push({
  path: 'progressBarWithOverlay',
  loadChildren: () =>
    import(
      './views/progress-bar/progress-bar-with-overlay/progress-bar-with-overlay.module'
    ).then((m) => m.ProgressBarWithOverlayModule),
});

routes.push({
  path: 'undeterminateDefaultProgressBar',
  loadChildren: () =>
    import(
      './views/progress-bar/undeterminate-default-progress-bar/undeterminate-default-progress-bar.module'
    ).then((m) => m.UndeterminateDefaultProgressBarModule),
});

//RadioButton
routes.push({
  path: 'radioControlled',
  loadChildren: () =>
    import(
      './views/radio-button/radio-controlled/radio-controlled.module'
    ).then((m) => m.RadioControlledModule),
});
routes.push({
  path: 'radioGroup',
  loadChildren: () =>
    import('./views/radio-button/radio-group/radio-group.module').then(
      (m) => m.RadioGroupModule
    ),
});

routes.push({
  path: 'radioLabelPosition',
  loadChildren: () =>
    import(
      './views/radio-button/radio-label-position/radio-label-position.module'
    ).then((m) => m.RadioLabelPositionModule),
});

routes.push({
  path: 'radioSized',
  loadChildren: () =>
    import('./views/radio-button/radio-sized/radio-sized.module').then(
      (m) => m.RadioSizedModule
    ),
});

routes.push({
  path: 'radioUncontrolled',
  loadChildren: () =>
    import(
      './views/radio-button/radio-uncontrolled/radio-uncontrolled.module'
    ).then((m) => m.RadioUncontrolledModule),
});

//Resultset Table
routes.push({
  path: 'defaultResultsetTable',
  loadChildren: () =>
    import(
      './views/resultset-table/default-resultset-table/default-resultset-table.module'
    ).then((m) => m.DefaultResultsetTableModule),
});

//Sidenav
routes.push({
  path: 'defaultSidenav',
  loadChildren: () =>
    import('./views/sidenav/default-sidenav/default-sidenav.module').then(
      (m) => m.DefaultSidenavModule
    ),
});

routes.push({
  path: 'sidenavWithChildren',
  loadChildren: () =>
    import(
      './views/sidenav/sidenav-with-children/sidenav-with-children.module'
    ).then((m) => m.SidenavWithChildrenModule),
});

//Slider
routes.push({
  path: 'continuousSlider',
  loadChildren: () =>
    import('./views/slider/continuous-slider/continuous-slider.module').then(
      (m) => m.ContinuousSliderModule
    ),
});

routes.push({
  path: 'controlledSlider',
  loadChildren: () =>
    import('./views/slider/controlled-slider/controlled-slider.module').then(
      (m) => m.ControlledSliderModule
    ),
});

routes.push({
  path: 'disabledSlider',
  loadChildren: () =>
    import('./views/slider/disabled-slider/disabled-slider.module').then(
      (m) => m.DisabledSliderModule
    ),
});

routes.push({
  path: 'discreteSlider',
  loadChildren: () =>
    import('./views/slider/discrete-slider/discrete-slider.module').then(
      (m) => m.DiscreteSliderModule
    ),
});

routes.push({
  path: 'sizedSlider',
  loadChildren: () =>
    import('./views/slider/sized-slider/sized-slider.module').then(
      (m) => m.SizedSliderModule
    ),
});

routes.push({
  path: 'sliderNoLimitValues',
  loadChildren: () =>
    import(
      './views/slider/slider-no-limit-values/slider-no-limit-values.module'
    ).then((m) => m.SliderNoLimitValuesModule),
});

routes.push({
  path: 'sliderWithInput',
  loadChildren: () =>
    import('./views/slider/slider-with-input/slider-with-input.module').then(
      (m) => m.SliderWithInputModule
    ),
});

routes.push({
  path: 'uncontrolledSlider',
  loadChildren: () =>
    import(
      './views/slider/uncontrolled-slider/uncontrolled-slider.module'
    ).then((m) => m.UncontrolledSliderModule),
});

//Spinner
routes.push({
  path: 'determinedSpinner',
  loadChildren: () =>
    import('./views/spinner/determined-spinner/determined-spinner.module').then(
      (m) => m.DeterminedSpinnerModule
    ),
});
routes.push({
  path: 'smallSpinner',
  loadChildren: () =>
    import('./views/spinner/small-spinner/small-spinner.module').then(
      (m) => m.SmallSpinnerModule
    ),
});
routes.push({
  path: 'spinnerWithOverlay',
  loadChildren: () =>
    import(
      './views/spinner/spinner-with-overlay/spinner-with-overlay.module'
    ).then((m) => m.SpinnerWithOverlayModule),
});
routes.push({
  path: 'undeterminedSpinner',
  loadChildren: () =>
    import(
      './views/spinner/undetermined-spinner/undetermined-spinner.module'
    ).then((m) => m.UndeterminedSpinnerModule),
});

//Switch
routes.push({
  path: 'controlledSwitch',
  loadChildren: () =>
    import('./views/switch/controlled-switch/controlled-switch.module').then(
      (m) => m.ControlledSwitchModule
    ),
});
routes.push({
  path: 'labelPositionSwitch',
  loadChildren: () =>
    import(
      './views/switch/label-position-switch/label-position-switch.module'
    ).then((m) => m.LabelPositionSwitchModule),
});
routes.push({
  path: 'uncontrolledSwitch',
  loadChildren: () =>
    import(
      './views/switch/uncontrolled-switch/uncontrolled-switch.module'
    ).then((m) => m.UncontrolledSwitchModule),
});

//TabbedSection
routes.push({
  path: 'defaultTabbedSection',
  loadChildren: () =>
    import(
      './views/tabbed-section/default-tabbed-section/default-tabbed-section.module'
    ).then((m) => m.DefaultTabbedSectionModule),
});

//Table
routes.push({
  path: 'simpleTable',
  loadChildren: () =>
    import('./views/table/simple-table/simple-table.module').then(
      (m) => m.SimpleTableModule
    ),
});

//Tabs
routes.push({
  path: 'addTabsDynamically',
  loadChildren: () =>
    import(
      './views/tabs/add-tabs-dynamically/add-tabs-dynamically.module'
    ).then((m) => m.AddTabsDynamicallyModule),
});

routes.push({
  path: 'controlledTabs',
  loadChildren: () =>
    import('./views/tabs/controlled-tabs/controlled-tabs.module').then(
      (m) => m.ControlledTabsModule
    ),
});

routes.push({
  path: 'tabsWithContent',
  loadChildren: () =>
    import('./views/tabs/tabs-with-content/tabs-with-content.module').then(
      (m) => m.TabsWithContentModule
    ),
});

routes.push({
  path: 'uncontrolledTabs',
  loadChildren: () =>
    import('./views/tabs/uncontrolled-tabs/uncontrolled-tabs.module').then(
      (m) => m.UncontrolledTabsModule
    ),
});

//Tags
routes.push({
  path: 'basicTag',
  loadChildren: () =>
    import('./views/tag/basic-tag/basic-tag.module').then(
      (m) => m.BasicTagModule
    ),
});

routes.push({
  path: 'sizedTag',
  loadChildren: () =>
    import('./views/tag/sized-tag/sized-tag.module').then(
      (m) => m.SizedTagModule
    ),
});

routes.push({
  path: 'tagWithIcon',
  loadChildren: () =>
    import('./views/tag/tag-with-icon/tag-with-icon.module').then(
      (m) => m.TagWithIconModule
    ),
});

routes.push({
  path: 'tagWithLink',
  loadChildren: () =>
    import('./views/tag/tag-with-link/tag-with-link.module').then(
      (m) => m.TagWithLinkModule
    ),
});

//TextInput
routes.push({
  path: 'controlledInput',
  loadChildren: () =>
    import('./views/text-input/controlled-input/controlled-input.module').then(
      (m) => m.ControlledInputModule
    ),
});

routes.push({
  path: 'disabledInput',
  loadChildren: () =>
    import('./views/text-input/disabled-input/disabled-input.module').then(
      (m) => m.DisabledInputModule
    ),
});

routes.push({
  path: 'fillParentSizeInput',
  loadChildren: () =>
    import(
      './views/text-input/fill-parent-size-input/fill-parent-size-input.module'
    ).then((m) => m.FillParentSizeInputModule),
});

routes.push({
  path: 'inputWithAction',
  loadChildren: () =>
    import(
      './views/text-input/input-with-action/input-with-action.module'
    ).then((m) => m.InputWithActionModule),
});

routes.push({
  path: 'inputWithCustomError',
  loadChildren: () =>
    import(
      './views/text-input/input-with-custom-error/input-with-custom-error.module'
    ).then((m) => m.InputWithCustomErrorModule),
});

routes.push({
  path: 'inputWithHelperText',
  loadChildren: () =>
    import(
      './views/text-input/input-with-helper-text/input-with-helper-text.module'
    ).then((m) => m.InputWithHelperTextModule),
});

routes.push({
  path: 'inputWithLengthConstraint',
  loadChildren: () =>
    import(
      './views/text-input/input-with-length-constraint/input-with-length-constraint.module'
    ).then((m) => m.InputWithLengthConstraintModule),
});

routes.push({
  path: 'inputWithPatternConstraint',
  loadChildren: () =>
    import(
      './views/text-input/input-with-pattern-constraint/input-with-pattern-constraint.module'
    ).then((m) => m.InputWithPatternConstraintModule),
});

routes.push({
  path: 'inputWithPlaceholder',
  loadChildren: () =>
    import(
      './views/text-input/input-with-placeholder/input-with-placeholder.module'
    ).then((m) => m.InputWithPlaceholderModule),
});

routes.push({
  path: 'inputWithPrefix',
  loadChildren: () =>
    import(
      './views/text-input/input-with-prefix/input-with-prefix.module'
    ).then((m) => m.InputWithPrefixModule),
});

routes.push({
  path: 'inputWithSuffix',
  loadChildren: () =>
    import(
      './views/text-input/input-with-suffix/input-with-suffix.module'
    ).then((m) => m.InputWithSuffixModule),
});

routes.push({
  path: 'invalidInput',
  loadChildren: () =>
    import('./views/text-input/invalid-input/invalid-input.module').then(
      (m) => m.InvalidInputModule
    ),
});

routes.push({
  path: 'optionalInput',
  loadChildren: () =>
    import('./views/text-input/optional-input/optional-input.module').then(
      (m) => m.OptionalInputModule
    ),
});

routes.push({
  path: 'uncontrolledInput',
  loadChildren: () =>
    import(
      './views/text-input/uncontrolled-input/uncontrolled-input.module'
    ).then((m) => m.UncontrolledInputModule),
});

//TextArea
routes.push({
  path: 'controlledTextarea',
  loadChildren: () =>
    import(
      './views/textarea/controlled-textarea/controlled-textarea.module'
    ).then((m) => m.ControlledTextareaModule),
});

routes.push({
  path: 'disabledTextarea',
  loadChildren: () =>
    import('./views/textarea/disabled-textarea/disabled-textarea.module').then(
      (m) => m.DisabledTextareaModule
    ),
});

routes.push({
  path: 'fillParentSizeTextarea',
  loadChildren: () =>
    import(
      './views/textarea/fill-parent-size-textarea/fill-parent-size-textarea.module'
    ).then((m) => m.FillParentSizeTextareaModule),
});

routes.push({
  path: 'invalidTextarea',
  loadChildren: () =>
    import('./views/textarea/invalid-textarea/invalid-textarea.module').then(
      (m) => m.InvalidTextareaModule
    ),
});

routes.push({
  path: 'optionalTextarea',
  loadChildren: () =>
    import('./views/textarea/optional-textarea/optional-textarea.module').then(
      (m) => m.OptionalTextareaModule
    ),
});

routes.push({
  path: 'textareaVerticalgrowManual',
  loadChildren: () =>
    import(
      './views/textarea/textarea-vertialgrow-manual/textarea-vertialgrow-manual.module'
    ).then((m) => m.TextareaVertialgrowManualModule),
});

routes.push({
  path: 'textareaVerticalgrowNone',
  loadChildren: () =>
    import(
      './views/textarea/textarea-vertialgrow-none/textarea-vertialgrow-none.module'
    ).then((m) => m.TextareaVertialgrowNoneModule),
});

routes.push({
  path: 'textareaWithCustomError',
  loadChildren: () =>
    import(
      './views/textarea/textarea-with-custom-error/textarea-with-custom-error.module'
    ).then((m) => m.TextareaWithCustomErrorModule),
});

routes.push({
  path: 'textareaWithDefaultRows',
  loadChildren: () =>
    import(
      './views/textarea/textarea-with-default-rows/textarea-with-default-rows.module'
    ).then((m) => m.TextareaWithDefaultRowsModule),
});

routes.push({
  path: 'textareaWithHelperText',
  loadChildren: () =>
    import(
      './views/textarea/textarea-with-helper-text/textarea-with-helper-text.module'
    ).then((m) => m.TextareaWithHelperTextModule),
});

routes.push({
  path: 'textareaWithLengthConstraint',
  loadChildren: () =>
    import(
      './views/textarea/textarea-with-length-constraint/textarea-with-length-constraint.module'
    ).then((m) => m.TextareaWithLengthConstraintModule),
});

routes.push({
  path: 'textareaWithPatternConstraint',
  loadChildren: () =>
    import(
      './views/textarea/textarea-with-pattern-constraint/textarea-with-pattern-constraint.module'
    ).then((m) => m.TextareaWithPatternConstraintModule),
});

routes.push({
  path: 'textareaWithPlaceholder',
  loadChildren: () =>
    import(
      './views/textarea/textarea-with-placeholder/textarea-with-placeholder.module'
    ).then((m) => m.TextareaWithPlaceholderModule),
});

routes.push({
  path: 'uncontrolledTextarea',
  loadChildren: () =>
    import(
      './views/textarea/uncontrolled-textarea/uncontrolled-textarea.module'
    ).then((m) => m.UncontrolledTextareaModule),
});

//Toogle Group
routes.push({
  path: 'basicToogleGroup',
  loadChildren: () =>
    import(
      './views/toggle-group/basic-toggle-group/basic-toggle-group.module'
    ).then((m) => m.BasicToggleGroupModule),
});

routes.push({
  path: 'controlledToggleGroup',
  loadChildren: () =>
    import(
      './views/toggle-group/controlled-toggle-group/controlled-toggle-group.module'
    ).then((m) => m.ControlledToggleGroupModule),
});

routes.push({
  path: 'disabledToggleGroup',
  loadChildren: () =>
    import(
      './views/toggle-group/disabled-toggle-group/disabled-toggle-group.module'
    ).then((m) => m.DisabledToggleGroupModule),
});

routes.push({
  path: 'multipleToggleGroup',
  loadChildren: () =>
    import(
      './views/toggle-group/multiple-toggle-group/multiple-toggle-group.module'
    ).then((m) => m.MultipleToggleGroupModule),
});

//Upload
routes.push({
  path: 'defaultUpload',
  loadChildren: () =>
    import('./views/uplodad/default-upload/default-upload.module').then(
      (m) => m.DefaultUploadModule
    ),
});

//V3 Select
routes.push({
  path: 'v3ControlledSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-controlled-select/v3-controlled-select.module'
    ).then((m) => m.V3ControlledSelectModule),
});
routes.push({
  path: 'v3MultipleSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-multiple-select/v3-multiple-select.module'
    ).then((m) => m.V3MultipleSelectModule),
});
routes.push({
  path: 'v3SizedSelect',
  loadChildren: () =>
    import('./views/v3-select/v3-sized-select/v3-sized-select.module').then(
      (m) => m.V3SizedSelectModule
    ),
});
routes.push({
  path: 'v3UncontrolledSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-uncontrolled-select/v3-uncontrolled-select.module'
    ).then((m) => m.V3UncontrolledSelectModule),
});
routes.push({
  path: 'v3WithIconsSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-with-icons-select/v3-with-icons-select.module'
    ).then((m) => m.V3WithIconsSelectModule),
});

//V3 Textarea
routes.push({
  path: 'v3ControlledTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-controlled-textarea/v3-controlled-textarea.module'
    ).then((m) => m.V3ControlledTextareaModule),
});
routes.push({
  path: 'v3DisabledTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-disabled-textarea/v3-disabled-textarea.module'
    ).then((m) => m.V3DisabledTextareaModule),
});
routes.push({
  path: 'v3FillParentTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-fill-parent-textarea/v3-fill-parent-textarea.module'
    ).then((m) => m.V3FillParentTextareaModule),
});
routes.push({
  path: 'v3InvalidTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-invalid-textarea/v3-invalid-textarea.module'
    ).then((m) => m.V3InvalidTextareaModule),
});
routes.push({
  path: 'v3RequiredTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-required-textarea/v3-required-textarea.module'
    ).then((m) => m.V3RequiredTextareaModule),
});
routes.push({
  path: 'v3UncontrolledTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-uncontrolled-textarea/v3-uncontrolled-textarea.module'
    ).then((m) => m.V3UncontrolledTextareaModule),
});

//Select
routes.push({
  path: 'defaultSelect',
  loadChildren: () =>
    import('./views/select/default-select/default-select.module').then(
      (m) => m.DefaultSelectModule
    ),
});
routes.push({
  path: 'disabledSelect',
  loadChildren: () =>
    import('./views/select/disabled-select/disabled-select.module').then(
      (m) => m.DisabledSelectModule
    ),
});
routes.push({
  path: 'errorMultipleSelect',
  loadChildren: () =>
    import(
      './views/select/error-multiple-select/error-multiple-select.module'
    ).then((m) => m.ErrorMultipleSelectModule),
});
routes.push({
  path: 'errorSelect',
  loadChildren: () =>
    import('./views/select/error-select/error-select.module').then(
      (m) => m.ErrorSelectModule
    ),
});
routes.push({
  path: 'multipleSelect',
  loadChildren: () =>
    import('./views/select/multiple-select/multiple-select.module').then(
      (m) => m.MultipleSelectModule
    ),
});
routes.push({
  path: 'searchableSelect',
  loadChildren: () =>
    import('./views/select/searchable-select/searchable-select.module').then(
      (m) => m.SearchableSelectModule
    ),
});

//Wizard
routes.push({
  path: 'controlledWizard',
  loadChildren: () =>
    import('./views/wizard/controlled-wizard/controlled-wizard.module').then(
      (m) => m.ControlledWizardModule
    ),
});

routes.push({
  path: 'uncontrolledWizard',
  loadChildren: () =>
    import(
      './views/wizard/uncontrolled-wizard/uncontrolled-wizard.module'
    ).then((m) => m.UncontrolledWizardModule),
});

routes.push({
  path: 'verticalWizard',
  loadChildren: () =>
    import('./views/wizard/vertical-wizard/vertical-wizard.module').then(
      (m) => m.VerticalWizardModule
    ),
});

routes.push({
  path: '404',
  loadChildren: () =>
    import('./views/error/error.module').then((m) => m.ErrorModule),
});
// routes.push({ path: '**', redirectTo: '/404' });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
