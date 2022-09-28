/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.Card;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

export class VisualSettings extends FormattingSettingsModel {
	public dataPoint: dataPointSettings = new dataPointSettings();
	public cards = [this.dataPoint]
}

export class dataPointSettings extends FormattingSettingsCard {
	// Default color
	public defaultColor = new formattingSettings.ColorPicker({
		name: "defaultColor",
		displayName: "Default Color",
		value: {value: ""}
	});
	// Show all
	public showAllDataPoints = new formattingSettings.ToggleSwitch({
		name: "showAllDataPoints",
		displayName: "Show all",
		value: true
	});
	// Fill
	public fill = new formattingSettings.ColorPicker({
		name: "fill",
		displayName: "Fill",
		value: {value: ""}
	});
	// Color saturation
	public fillRule = new formattingSettings.Slider({
		name: "fillRule",
		displayName: "Color saturation",
		value: 0,
		options: {
			minValue: {
                type: powerbi.visuals.ValidatorType.Min,
                value: 0,
            },
            maxValue: {
                type: powerbi.visuals.ValidatorType.Max,
                value: 100,
            }
		}
	});
	// Text Size
	public fontSize = new formattingSettings.NumUpDown({
		name: "fontSize",
		displayName: "Text Size",
		value: 12, 
	})

	name: string = "dataPoint";
    displayName: string = "Data colors";
    slices: Array<FormattingSettingsSlice> = [this.defaultColor, this.showAllDataPoints, this.fill, this.fillRule, this.fontSize];
  }

